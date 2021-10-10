import React from 'react'


class Cards extends React.Component{
    constructor(){
        super();
        this.state={
            congratulations: '',
            score: 0,
            topScore: 0,
            superheroes: [
                {
                  "id": 1,
                  "clicked": false,
                  "name": "Captain America",
                  "image": "https://media.oregonlive.com/madaboutmovies/photo/9816899-large.jpg",
                  "occupation": "Soldier"
                },
                {
                  "id": 2,
                  "clicked": false,
                  "name": "Iron Man",
                  "image": "https://i.pinimg.com/originals/88/39/2b/88392b3dc35aad62440a3866ee02a8e8.jpg",
                  "occupation": "CEO Stark Ind."
                },
                {
                  "id": 3,
                  "clicked": false,
                  "name": "Hulk",
                  "image": "https://www.zastavki.com/pictures/640x960/2015/Fantasy_Hulk_angry__Avengers_104763_30.jpg",
                  "occupation": "Biochemist"
                },
                {
                  "id": 4,
                  "clicked": false,
                  "name": "Thor",
                  "image": "https://images-na.ssl-images-amazon.com/images/I/51Tp1peS5FL._AC_.jpg",
                  "occupation": "Warrior"
                },
                {
                  "id": 5,
                  "clicked": false,
                  "name": "Batman",
                  "image": "https://vignette.wikia.nocookie.net/batman/images/8/8f/Christian_Bale_as_The_Dark_Knight.jpg/revision/latest/top-crop/width/360/height/450?cb=20140208170841",
                  "occupation": "Expert Detective"
                },
                {
                  "id": 6,
                  "clicked": false,
                  "name": "Superman",
                  "image": "https://i0.wp.com/pipocamoderna.com.br/wp-content/uploads/2017/09/superman__henry_cavill__batman_v_superman.jpg",
                  "occupation": "Journalist"
                },
                {
                  "id": 7,
                  "clicked": false,
                  "name": "Wonder Woman",
                  "image": "https://i.pinimg.com/originals/f3/3c/f0/f33cf0bf1bb0fd71c4bba1d4a88afe70.jpg",
                  "occupation": "Secretary"
                },
                {
                  "id": 8,
                  "clicked": false,
                  "name": "Flash",
                  "image": "https://i.pinimg.com/originals/d7/0d/84/d70d843d8ab87911754c6b7603a4edf2.jpg",
                  "occupation": "Forensic Sci."
                },
                {
                  "id": 9,
                  "clicked": false,
                  "name": "Wolverine",
                  "image": "https://c4.wallpaperflare.com/wallpaper/899/678/503/movies-comics-xmen-wolverine-superheroes-logan-claws-3333x4929-entertainment-movies-hd-art-wallpaper-preview.jpg",
                  "occupation": "Adventurer"
                },
                {
                  "id": 10,
                  "clicked": false,
                  "name": "Spider-Man",
                  "image": "https://i.pinimg.com/originals/d5/6b/c4/d56bc445842242b29284d60b4b9a2684.jpg",
                  "occupation": "Photographer"
                },
                {
                  "id": 11,
                  "clicked": false,
                  "name": "Deadpool",
                  "image": "https://vignette.wikia.nocookie.net/marvelmovies/images/6/66/Deadpool_promo.png/revision/latest?cb=20150707202600",
                  "occupation": "Mercenary"
                },
                {
                  "id": 12,
                  "clicked": false,
                  "name": "Mr Incredible",
                  "image": "https://www.writeups.org/wp-content/uploads/Mister-Incredible-The-Incredibles-Bob-Parr-i.jpg",
                  "occupation": "Insurance Rep."
                }
              ]
        }
    }
    shuffle=(a)=> {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        console.log(a);
        this.setState({superheroes:a})
    }
    
    random=()=>{
        for (let index = 0; index < 13; index++) {
            let rand = []
            rand.push(Math.floor(Math.random()*12))  
            console.log((rand));
        }
        
    }
    restartGame=()=>{
        let heroes3 = this.state.superheroes;
        for (let index = 0; index < heroes3.length; index++) {
            heroes3[index].clicked = false
            this.setState({superheroes: heroes3})
            this.setState({score: 0})
            
        }
    }
    moveDivs=(index)=>{
        // console.log(index);
        
        let heroes2 = this.state.superheroes;
        let counter = this.state.score
        if (heroes2[index].clicked) {
            console.log('should restart game');
            this.restartGame()
        }else{
            this.setState({score: ++counter})
            this.setState({topScore: counter})
            heroes2[index].clicked = true
            this.setState({superheroes: heroes2})
            this.shuffle(this.state.superheroes)
        }
        // this.random()
        
    }
    

    render(){
        let arr = this.state.superheroes;
        if (this.state.score === 12) {
            this.setState({congratulations: 'Congrats you finish the Game!!'})
        }
        // console.log(arr)
        return(
            <div>
                <div className='header'>
                    <h1 style={{marginTop: '0'}}>Superheroes Memory Game</h1>
                    <h2>Get points by clicking on an image but don't click on any more than once!</h2>
                
                    <div className='score'>
                        <p style={{marginRight: '20px'}}>Score: {this.state.score}</p>
                        <p style={{marginRight: '20px'}}>Top Score: {this.state.topScore}</p>
                        <p>{this.state.congratulations}</p>
                    </div>
                </div>
                <div>
                    {arr.map((item, index) =>{
                       return( 
                       <div className='card' onClick={()=> this.moveDivs(index)} style={{display:'inline-block'}}>
                            <img style={{width: '200px', height: '250px', objectFit:'cover', borderRadius: '5px'}} src={item.image}/>
                            <h3>{item.name}</h3>
                            <p>{item.occupation}</p>
                            
                        </div>)
                    })}
                </div>
            </div>
        )
    }
}

export default Cards;