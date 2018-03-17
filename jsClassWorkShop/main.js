const body = document.body;

class Classic { //below is a default parameter in case nothing is passed to the object
	constructor(art_url="https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"){
		this.frame = "black";
		this.art_url = art_url;
	}
	render(){
		let img = document.createElement('img');
		img.src = this.art_url; 
		img.className = this.frame;
		body.appendChild(img);
	}
}


let art1 = new Classic()
art1.render()


class Meme extends Classic {
	constructor(art_url){
		super(art_url);
		this.frame = "red"
	}
}

let meme = new Meme("http://i0.kym-cdn.com/entries/icons/original/000/022/940/spongebobicon.jpg");
meme.render();


class Roach extends Classic {
	constructor(art_url){
		super(art_url);
		this.frame = "green";
	}
}

let roach = new Roach("https://s.aolcdn.com/hss/storage/midas/9177f1bff2326923725e0ed737583830/201851840/putinmeme02.jpg");
roach.render();