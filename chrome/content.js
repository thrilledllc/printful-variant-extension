

var scr = document.createElement('script');

scr.textContent = '(' + function () { 
    if (PF &&
        PF.SyncDialog &&
        PF.SyncDialog.items &&
        PF.SyncDialog.items.length) {

      PF.SyncDialog.items.forEach(function (item) {
        var $div = $('tr[data-id=' + item.id + '] .statusInfo'),
          $variant = $('<div></div>');

        $variant.css({
          marginTop: 10,
          border: '1px solid #EEE',
          background: '#FAFAFA',
          padding: 15,
          fontSize: 30
        }).append($('<div></div>').css({
          fontWeight: 'bold',
          fontSize: 16
          }).text('Variant ID for Shopify SKU'))
        .append(item.variant.id).appendTo($div);
      });
    }

  } + ')();';
//cram that sucker in 
(document.head || document.documentElement).appendChild(scr);
//and then hide the evidence as much as possible.
scr.parentNode.removeChild(scr);
