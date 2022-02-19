interface Videogame {
                name: string;
                rating: number
};

let data: Videogame[] = [
                {
                                name: 'God of War Ragnarok',
                                rating: 4.5
                },
                {
                                name: 'Destiny 2: La reina bruja',
                                rating: 4.1
                },
                {
                                name: 'Horizon: Forbidden West',
                                rating: 4.3
                }
];

// getInfo es una función de orden superior
// fn es una función de primer order

function getInfo(
                videogames: Videogame[], 
                fn: (b: string[]) => void)
{
                const videogamesInfo = videogames.map( element => `Videojuego: ${ element.name } con una valoración de: ${ element.rating }`);  
                
                fn( videogamesInfo )
};

function show( videogames: string[] ) {
                videogames.forEach( item => console.log( item ) )
};

function showToUpper( videogames: string[] ) {
                videogames.forEach( item => console.log( item.toUpperCase() ) )
};

function showOrdered( videogames: string[] ) {
                videogames.sort().forEach( ( item, index ) => {
                                console.log(`${ index + 1 } - ${ item }`);
                } );
}

getInfo( data, show )
getInfo( data, showToUpper )
getInfo( data, showOrdered )