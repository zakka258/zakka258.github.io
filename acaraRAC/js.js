$( document ).ready(function() {
   $('#btnClick').on('click',function(){
    if($('#frame-cont').css('display')!='none'){
    $('#2').html($('#static').html()).show().siblings('#frame-cont').hide();
    }else if($('#2').css('display')!='none'){
        $('#frame-cont').show().siblings('#2').hide();
    }
var $this = $(this);
    $this.toggleClass('Syarat dan Ketentuan');
    if($this.hasClass('Syarat dan Ketentuan')){
        $this.text('Laman Pendaftaran');         
    } else {
        $this.text('Syarat dan Ketentuan');
    }
});
    });