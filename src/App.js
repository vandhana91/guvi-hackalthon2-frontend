//import logo from './logo.svg';
import './App.css';
import React,{ useState } from 'react';
import Login from './login';
import Payment from './payment';
import { Switch, Route, Link } from "react-router-dom";
import { Movie } from './Movie';
import {Pickseat} from './seatpick';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import {AdminMovie} from './AdminMovie'; 
import {AddMovies} from './AddMovies';
import {Recom} from './recommovies';
//import {MovieDetails} from './movies';
function App() {
  const movies=[
    {
      name:"RRR",
    image:'https://assetscdn1.paytm.com/images/cinema/3-c9214ef0-50ec-11ec-b07a-5526504ce914.jpg',
    
    rating:"⭐9.1",
    summary:"Action/Drama/Historical/Period",
    trailer:"https://www.youtube.com/embed/UTiXQcrLlv4"
  },
    {
      name:"Home Minister",
    image:'https://assetscdn1.paytm.com/images/cinema/home-minister-8ebc1c60-a149-11ec-942f-1d05071e0cf9.jpg',
    
    rating:"⭐7.5",
    summary:'Action/Drama',
    trailer:"https://www.youtube.com/embed/r0synl-lI4I"  
  },
    {
      name:"Morbius",
      image:'https://www.comingsoon.net/assets/uploads/2022/02/morbius-poster.jpg',
     
      rating:"⭐7.4",
      summary:'Action/Adventure/Sci-fi',
      trailer:"https://www.youtube.com/embed/oQiH_Iw0kDs"  
    },
      {
        name:"James",
        image:'https://static.toiimg.com/thumb/msid-89136817,imgsize-109094,width-800,height-600,resizemode-75/89136817.jpg',
        
        rating:"⭐9.2",
        summary:'Action/Thriller',
        trailer:"https://www.youtube.com/embed/94BzBOpv42g"
      },
        {
          name:"Attack -Part1",
          image:'https://www.5dariyanews.com/Uploads/2022/03/04/en-news-18210866-15-large.jpg',
          
          rating:"⭐8.9",
          summary:'Action/Thriller/Sci-fi',
          trailer:"https://www.youtube.com/embed/fa_DIwRsa9o"
          },
          {
            name:"The Kashmir Files",
            image:'https://images.newindianexpress.com/uploads/user/imagelibrary/2022/3/12/w900X450/The_Kashmir_Files.jpg?w=400&dpr=2.6',
            
            rating:"⭐9.2",
            summary:'Drama/Historical',
            trailer:"https://www.youtube.com/embed/t9retstFUlM"
            },
            {
              name:"Mission Impossible",
              image:'https://c8.alamy.com/comp/E5MK1R/mission-impossible-tom-cruise-on-poster-art-1996-paramount-picturescourtesy-E5MK1R.jpg',
              
              rating:"⭐8.8",
              summary:'Action/Comedy/Thriller',
              trailer:"https://www.youtube.com/embed/pVOd8HAQQZM"
              },
              {
                name:"Local Train",
                
                image:'https://static.toiimg.com/thumb/imgsize-123456,msid-90486169,width-600,resizemode-4/90486169.jpg',
                rating:"⭐8.9",
                summary:'Action/Romantic',
                trailer:"https://www.youtube.com/embed/VkkyaodksT4"
                },

                {
                  name:"Maanadu",
                  
                  image:'https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Maanaadu_poster.jpg/220px-Maanaadu_poster.jpg',
                  rating:"⭐8.9",
                  summary:'Action/Thriller',
                  trailer:"https://www.youtube.com/embed/VkkyaodksT4"
                  },
    
  

  ];
 
  const history=useHistory();
  
  
  const [movieList,setMovieList] = useState(movies);
  return (
    <div className="App">
      <br>
      </br>
      <br>
      </br>
      <h2>Welcome To Ticket New</h2>
       <ul >
         
         <li>
           {/* Change the url bar but dont refresh */}
           <Link to="/login" 
           style={{ color:'#1e90ff',fontFamily:'cursive',
           fontWeight:'bold',textDecoration:'none',fontSize:'17px' }}
           >USER LOGIN</Link>
         </li>
         
         <li>
           {/* Change the url bar but dont refresh */}
           <Link to="/adminmovies" 
           style={{ color:'#1e90ff',fontFamily:'cursive',
           fontWeight:'bold',textDecoration:'none',fontSize:'17px' }}
           >ADMIN INFO</Link>
         </li>
         <li>
           {/* Change the url bar but dont refresh */}
           
         </li>
         </ul>
      <Switch>
      <Route  path="/login">
      <Login />
    </Route>
    
   
    <Route path='/movies'>
    <section className='movie-list'>
    {
      movies.map((movie)=>(
        <Movie
        name={movie.name}
        rating={movie.rating}
        summary={movie.summary}
        poster={movie.image}
        bookbutton={<Button onClick={()=>{history.push("/pickseat" )
           
      }}
      color="primary" variant="contained" size="small">
      BookNow</Button>}
        />
      )
      
      )
    }
    </section>
    </Route>

    <Route path='/adminmovies'>
    <Link to="/addmovies" 
           style={{ color:'#0000FF',fontFamily:'cursive',
           fontWeight:'bold',textDecoration:'none',fontSize:'17px' }}
           >ADD MOVIES</Link> <br></br>

    <section className='movie-list'>
    {
      movieList.map((movie)=>(
        <AdminMovie
        name={movie.name}
        rating={movie.rating}
        summary={movie.summary}
        poster={movie.image}
        
        />
      )
      
      )
    }
    </section>
    
    </Route>
    
    <Route  path="/pickseat">
      <Pickseat />
    </Route>
    <Route  path="/payments">
      <Payment />
    </Route>
    <Route  path="/adminmovies">
      <AdminMovie movieList={movieList} setMovieList={setMovieList}/>
    </Route>
    <Route  path="/addmovies">
      <AddMovies movieList={movieList} setMovieList={setMovieList} />
    </Route>
    </Switch>
   
    </div>
    
  );
}

export default App;


