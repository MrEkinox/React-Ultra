export default class ImagePicker {
  async open() {
    return new Promise((resolve, reject) => {
      var input = document.createElement("input");
      input.type = "file";
      input.onchange = (e: any) => {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = ({ target }) => {
          if (target) resolve(target.result);
          else reject("ImagePicker ERROR");
        };
      };
      input.click();
    });
  }
}
