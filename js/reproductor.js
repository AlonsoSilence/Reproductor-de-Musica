$(document).on("ready",inicio);

function inicio()
{
	$("#shakira").on("click",play);
	$("#beyonce").on("click",play);
	$("#katy").on("click",play);
	$("#taylor").on("click",play);
	$("#album-katy").on("click",playSencillo);
}

function playSencillo()
{
	$(".lista-contenido li").on("click",start);
}

function start(datos)
{
	var sencillo = datos.currentTarget.id;
	$("#playlist .reproductor audio").attr("src","media/"+sencillo+".mp3");
}


function play()
{
	$("#artistas li").on("click",playlist);
}

function playlist(datos)
{
	var artista = datos.currentTarget.id;
	var CSSCambios2 =
	{
		background:"#22BCE0",
	}
	var CSSCambios =
	{
		background:"#333",
	}
	
	$("#artistas li").css(CSSCambios);
	$("#"+artista).css(CSSCambios2);
	//$("#artistas li"+"#"+artista).attr("class","artista-active");
	
	if (artista=="shakira") {
		$("#playlist .reproductor audio").attr("src","media/mix-"+artista+".mp3");
		$("#playlist .canciones .list .lista").hide()
		$("#playlist .canciones .list #album-"+artista).show();
				
	}
	else if(artista=="beyonce"){
		$("#playlist .reproductor audio").attr("src","media/mix-"+artista+".mp3");
		$("#playlist .canciones .list .lista").hide()
		$("#playlist .canciones .list #album-"+artista).show();
	}
	else if(artista=="taylor"){
		$("#playlist .reproductor audio").attr("src","media/mix-"+artista+".mp3");
		$("#playlist .canciones .list .lista").hide()
		$("#playlist .canciones .list #album-"+artista).show();
	}
	else if(artista=="katy"){
		$("#playlist .reproductor audio").attr("src","media/mix-"+artista+".mp3");
		$("#playlist .canciones .list .lista").hide()
		$("#playlist .canciones .list #album-"+artista).show();
			
	}

}

