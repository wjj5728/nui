class Puzzle {
  constructor(option) {
    if (!option.id || !option.imgUrl || !option.width || !option.height) {
      return new Error("option不全");
    }
    let initOption = {
      limitNum: 200
    };
    for (const key in option) {
      initOption[key] = option[key];
    }
    this.option = initOption;
    this.step = option.limitNum;
    this.init(initOption);
  }
  init(option) {
    var wrap = document.getElementById(option.id);
    var canvas = (this.canvas = document.createElement("canvas"));
    canvas.className = "canvas-puzzle";
    canvas.width = option.width;
    canvas.height = option.height;
    wrap.appendChild(canvas);
    this.ctx = canvas.getContext("2d");
    var image = (this.image = new Image());
    this.option = option;
    this.arr = [];
    this.indexArr = [];
    this.initArr = [];
    this.initIndex = [];
    this.Row = 3; /* 行 */
    this.Column = 3; /* 列 */
    this.IWidth;
    this.IHeight;
    this.PerCol;
    this.PerRow;
    this.CWidth = canvas.width;
    this.CHeight = canvas.height;
    this.block = 8;
    this.isFinish = false;

    image.onload = () => {
      this.IWidth = image.width;
      this.IHeight = image.height;
      for (var i = 0; i < this.Row; i++) {
        for (var j = 0; j < this.Column; j++) {
          this.arr.push([j, i]);
          this.initIndex.push(j + i * this.Row);
        }
      }
      this.initArr = JSON.parse(JSON.stringify(this.arr));
      this.PerCol = this.IWidth / this.Column;
      this.PerRow = this.IHeight / this.Row;
      this.upset();
      this.getIndexArr();
      this.render();
    };
    image.src = option.imgUrl;
    canvas.addEventListener("click", e => {
      if (this.isFinish) return;
      var ex = e.clientX,
        ey = e.clientY,
        rect = canvas.getBoundingClientRect(),
        tx = ex - rect.left - document.documentElement.clientLeft,
        ty = ey - rect.top - document.documentElement.clientTop;
      tx = (tx * canvas.width) / rect.width;
      ty = (ty * canvas.height) / rect.height;
      var clickIndex = this.getIndex(tx, ty);
      var blanckIndex = this.indexArr.indexOf(this.arr.length - 1);
      var click = this.initArr[clickIndex];
      var blank = this.initArr[blanckIndex];
      var dis = this.distance(click, blank);
      if (dis == 1) {
        if (this.step == 0) {
          return;
        }
        this.swapArr(clickIndex, blanckIndex);
        this.getIndexArr();
        this.render();
        this.step -= 1;
        option.every && option.every(this.step);
        if (this.indexArr.join("") == this.initIndex.join("")) {
          option.success && option.success();
        } else {
          if (this.step <= 0) {
            option.fail && option.fail();
          }
        }
      }
    });
  }
  getIndex(x, y) {
    var Y = Math.floor(y / (this.CHeight / this.Row));
    var X = Math.floor(x / (this.CWidth / this.Column));
    var len = X + Y * this.Row;
    return len;
  }
  getIndexArr() {
    var Iarr = [];
    for (var i = 0; i < this.arr.length; i++) {
      Iarr.push(this.arr[i][0] + this.arr[i][1] * this.Row);
    }
    this.indexArr = Iarr;
    if (this.indexArr.join("") == this.initIndex.join("")) {
      this.isFinish = true;
    } else {
      this.isFinish = false;
    }
  }
  swapArr(index1, index2) {
    this.block = index1;
    this.arr[index1] = this.arr.splice(index2, 1, this.arr[index1])[0];
  }
  distance(click, blank) {
    return Math.abs(click[0] - blank[0]) + Math.abs(click[1] - blank[1]);
  }
  upset() {
    this.arr.sort(function() {
      return Math.random() - 0.5;
    });
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i][0] == 2 && this.arr[i][1] == 2) {
        this.block = i;
      }
    }
  }
  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    /* 解决部分安卓机 无法清除画板 导致重叠问题 */
    this.canvas.style.display = "none";
    this.canvas.offsetHeight;
    this.canvas.style.display = "inherit";
    // console.log(this.arr);
    for (var i = 0; i < this.arr.length; i++) {
      var element = this.arr[i];
      var iRow = Math.ceil((i + 1) / this.Row) - 1;
      var iCol = i % this.Row;
      if (this.block == i && !this.isFinish) {
        this.ctx.globalAlpha = 0;
        this.ctx.beginPath();
      } else {
        this.ctx.globalAlpha = 1;
      }
      this.ctx.drawImage(
        this.image,
        this.PerCol * element[0],
        this.PerRow * element[1],
        this.IWidth / this.Column,
        this.IHeight / this.Row,
        (this.CWidth / this.Column) * iCol,
        (this.CHeight / this.Row) * iRow,
        this.CWidth / this.Column,
        this.CHeight / this.Row
      );
      if (this.block == i && !this.isFinish) {
        this.ctx.closePath();
        this.ctx.save();
      }
    }
  }
  recovery() {
    this.upset();
    this.getIndexArr();
    this.render();
    this.step = this.option.limitNum;
  }
  vip() {
    this.isFinish = true;
    this.arr = JSON.parse(JSON.stringify(this.initArr));
    this.render();
    this.option.success && this.option.success();
  }
}
export default Puzzle;
