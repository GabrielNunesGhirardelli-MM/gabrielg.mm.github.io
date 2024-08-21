(function(w,d,s,l,i,u){
    w[l]=w[l]||[];
    w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
    var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),
        dl=l!='dataLayer'?'&l='+l:'',
        gtmUrl = 'https://www.googletagmanager.com/gtm.js?id='+i+dl+'&gtm_auth=WTa8hzewc3FkK5TmcazQ4w&gtm_preview=env-98&cb=3890755066116753';

    j.async=true;

    j.onload = function() {
    console.log('GTM loaded successfully');
    };

    j.onerror = function() {
    console.log('GTM failed, loading fallback');
    var fallbackScript = d.createElement(s);
    fallbackScript.src = u + '?id=' + i + dl + '&gtm_auth=WTa8hzewc3FkK5TmcazQ4w&gtm_preview=env-98&cb=3890755066116753';
    fallbackScript.async = true;
    f.parentNode.insertBefore(fallbackScript, f);
    };

    j.src=gtmUrl;
    f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T52G9BWD','https://ssveste.dudalina.com.br/gtm.js');