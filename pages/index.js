import Head from "next/head";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import Map from "../components/Map";
import ClusterDetail from "../components/Clusterdetail";

const Home =() => {
  const size = useWindowSize();
  const router = useRouter()
  const [state, setState] = useState({
    allAtolls: [],
    selectedAtoll: "s",
    width: 0
  });
  
  const fetchapi = async () => {
    let response = await fetch(`${process.env.DOMAINSS}/api/atolls`)
    console.log(process.env.DOMAINSS)
    response = await response.json()
    console.log(response)
    setState({ ...state, allAtolls: response });
    const urlatoll = response[0]
    setState({ ...state, selectedAtoll: urlatoll });
  }
  const handleResize = () => {
    
     setState({ ...state, width: window.innerWidth });
     console.log(window.innerWidth)
  }
  const setMobile =()=>{
    setState({ ...state, isMobile: true });
  } 
  useEffect(() => {
    fetchapi()
    window.addEventListener('resize', handleResize())
    
    
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
          {size.width > 768?  <Map updateAtoll={updateAtoll}></Map>: <></>}
         
          
          <ClusterDetail selectedAtoll={state.selectedAtoll}></ClusterDetail>
        </div>
      </div>
    </div>
  );
}

export default Home

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}