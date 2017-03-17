//FB share, used in PC
function shareFacebook(url, options, app_id){
    /**
     * options: 
     * picture, name, description, redirect_uri
     */

	var share_url = 'https://www.facebook.com/dialog/feed?app_id=' + app_id + '&display=popup&picture=' + encodeURIComponent(options.picture) + '&link=' + encodeURIComponent(url) + '&redirect_uri=' + encodeURIComponent(options.redirect_uri) + '&name=' + encodeURIComponent(options.name) + '&description=' + encodeURIComponent(options.description);

	var w_width=600;                                                                        
	var w_height=300;                                                                        
	var x=(screen.width-w_width)/2;                                                        
	var y=(screen.height-w_height)/2;                                                     
	var ww='width='+w_width+',height='+w_height+',top='+y+',left='+x;   
	
	window.open(share_url, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,'+ww);
	
}
