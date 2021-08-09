function loadScriptAsync(src, callback, customAttrs)
{
    var s,r,t;
    r = false;
    s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = src;
    s.async = true;
    if ( customAttrs != undefined ) 
    {
        for (var key in customAttrs) 
        {
            if (customAttrs.hasOwnProperty(key)) 
            { 
                console.log("key::"+key+"@@@val::"+customAttrs[key])
                s.setAttribute(key, customAttrs[key]);
            }
        }  
    }

    if ( !r && (!this.readyState || this.readyState == 'complete') )
    {
        r = true;
        //callback!='noCallBack'?callback():"";
        callback != 'noCallBack' ? s.addEventListener('load', function (e) { callback(); }, false) : "";
    }
    t = document.getElementsByTagName('script')[0];
    t.parentNode.insertBefore(s, t);
}

// function loadCSS( href, before, media )
// {
//     var doc = window.document;
//     var ss = doc.createElement( "link" );
//     var ref;
//     if( before )
//     {
//         ref = before;
//     }
//     else 
//     {
//         var refs = ( doc.body || doc.getElementsByTagName( "head" )[ 0 ] ).childNodes;
//         ref = refs[ refs.length - 1];
//     }
//     var sheets = doc.styleSheets;
//     ss.rel = "stylesheet";
//     ss.href = href;
//     ss.media = "only x";
//     function ready( cb )
//     {
//         if( doc.body )
//         {
//             return cb();
//         }
//         setTimeout(function(){
//             ready( cb );
//         });
//     }
//     ready( function(){
//       ref.parentNode.insertBefore( ss, ( before ? ref : ref.nextSibling ) );
//     });
//     var onloadcssdefined = function( cb ){
//         var resolvedHref = ss.href;
//         var i = sheets.length;
//         while( i-- )
//         {
//             if( sheets[ i ].href === resolvedHref )
//             {
//                 return cb();
//             }
//         }
//         setTimeout(function() {
//             onloadcssdefined( cb );
//         });
//     };
//     function loadCB()
//     {
//         if( ss.addEventListener )
//         {
//             ss.removeEventListener( "load", loadCB );
//         }
//         ss.media = media || "all";
//         hidePageLoader();
//     }
//     if( ss.addEventListener )
//     {
//         ss.addEventListener( "load", loadCB);
//     }
//     ss.onloadcssdefined = onloadcssdefined;
//     onloadcssdefined( loadCB );
//     return ss;
// }

// function hidePageLoader()
// {
//     setTimeout(function(){
//         document.getElementById('upPageLoader').classList.add( "fadeout" );
//     },400);
//     setTimeout(function(){
//         document.getElementById('upPageLoader').style.display='none';
//     },800)
// }