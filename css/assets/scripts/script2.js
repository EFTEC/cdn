
function setBullet(nameJQuery) {
   const obj=$(nameJQuery);
   obj.on("click", function () {
      $("#items2").append('<button class="mb-2 mr-2 btn-icon btn-pill btn btn-info">' +
          '<i class="lnr lnr-cross btn-icon-wrapper"> </i>Info' +
          '</button>');
   });
   obj.data("stuff",{});
   $(".addb").on("click", function () {
      const type=$(this).attr('attr');
      let currentData=obj.data('stuff');
      if(currentData[type] === undefined) {
         currentData[type]=type;
         console.log(currentData);
         obj.data("stuff",currentData);
         obj.append('<button data-id="'+type+'" class="mb-2 mr-2 btn-icon btn-pill btn btn-info">' +
             '<i class="lnr lnr-cross btn-icon-wrapper"> </i>' + type +
             '</button>');
      }
      return false;
   });
   obj.on('click', '> *', function(e) {
      // close bullet
      console.log(this);
      const type=$(this).data('id');
      let currentData=obj.data('stuff');
      currentData[type]=undefined;
      console.log(currentData);
      obj.data("stuff",currentData);
      $(this).remove();

      return false;
   });
}

function init() {
   setBullet("#items2");
}
