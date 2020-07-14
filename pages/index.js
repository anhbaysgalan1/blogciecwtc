import React from 'react';

import Layout from '../components/layout/layout';
import Hero from '../components/hero';
import Categories from '../components/categories';
import Notes from '../components/notes';

const Home = () => {
  return ( 
    <Layout>
      <Hero
        title="Últimas Noticias"
      />
      <Categories/>
      <Notes/>
    </Layout>
   );
}
 
export default Home;