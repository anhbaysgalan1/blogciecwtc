import React from 'react';

import Layout from '../components/layout/layout';
import {} from '../components/ui/general';
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