import Head from "next/head";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import Map from "../components/Map";
import ClusterDetail from "../components/Clusterdetail";

const Home =() => {
  const router = useRouter()
  const [state, setState] = useState({
    allAtolls: [],
    selectedAtoll: "s"
  });
  
  const fetchapi = async () => {
    let response = await fetch('https://cluster-jsc.vercel.app/api/atolls')
    response = await response.json()
    console.log(response)
    setState({ ...state, allAtolls: response });
    const urlatoll = response[0]
    setState({ ...state, selectedAtoll: urlatoll });
  }

  useEffect(() => {
    fetchapi()
  }, [router])

  const updateAtoll = (atoll) => {
    console.log(state.allAtolls[atoll]);
    console.log(atoll);
    const atolo = state.allAtolls[atoll];
    setState({ ...state, selectedAtoll: atolo });
    
    router.push(`/${atoll}`)
  };

  return (
    <div>
      <Head>
        <title>Cluster Map</title>
      </Head>

      <div className="container pb-3 mt-3">
        <div className="row">
          
          <Map updateAtoll={updateAtoll}></Map>
          
          <ClusterDetail selectedAtoll={state.selectedAtoll}></ClusterDetail>
        </div>
      </div>
    </div>
  );
}

export default Home

