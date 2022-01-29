import styles from "../styles/Home.module.css"
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Map from "../components/Map";
import ClusterDetail from "../components/Clusterdetail";
import { useWindowSize } from "../utils/size";
import { stickyNav } from "../utils/sticky-nav";

const Home = () => {
  const size = useWindowSize();
  const router = useRouter();
  const [state, setState] = useState({
    allAtolls: [],

    width: 0,
  });

  const shareData = {
    title: 'Cluster Map | Judicial Service Commission',
    text: 'Maldives Judicial Cluster Chart',
    url: 'https://jsc.gov.mv/cluster-map'
  }

  const share = () =>{
       navigator.share(shareData)
  }


  

  const fetchapi = async () => {
    
  };

  useEffect(() => {
    fetchapi();
    stickyNav();
  }, [router]);

  const updateAtoll = (atoll) => {
    console.log(state.allAtolls[atoll]);
    console.log(atoll);
    const atolo = state.allAtolls[atoll];
    setState({ ...state, selectedAtoll: atolo });

    router.push(`/${atoll}`);
  };

  return (
    <div>
      <Head>
        <title>Cluster Map</title>
        <link rel="me"
  href="https://twitter.com/maldivesjsc"
></link>

      </Head>

      <div className="container pb-3 mt-3">
        <div className="row">
          {size.width > 768 ? <Map updateAtoll={updateAtoll}></Map> : <></>}

          <div className="col-lg-8">
            <div className="row mb-5">
              <div className="col-lg-6">
                <h5 className="post-cat mt-2">ކްލަސްޓާރ ޗާޓު /</h5>
                <h1 className={styles.heading}>ދކމކފދސަމ</h1>

                <div className="row mb-3 ">
                  <div className="col ">
                    <div className="col">
                      <h5>44</h5>
                    </div>
                    <div className="col">
                      <h6>ކްލަސްޓާރ</h6>
                    </div>
                  </div>
                  <div className="col">
                    <div className="col">
                      <h5>44</h5>
                    </div>
                    <div className="col">
                      <h6>ޖުމްލަ މައްސަލަ</h6>
                    </div>
                  </div>
                  <div className="col">
                    <div className="col">
                      <h5>55</h5>
                    </div>
                    <div className="col">
                      <h6>ފަނޑިޔާރުންގެ އަދަދު</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
          

  
            <div className={styles.sharee+ ' mt-2 py-2'}>
              <div  className="">SHARE    | 
              <a rel="noreferrer"  target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https://jsc.gov.mv/cluster-map"><i className="fa fa-facebook"></i></a>
              <a rel="noreferrer"  target="_blank"  href={`https://twitter.com/intent/tweet?text=Maldives Judicial Clusters Chart via @maldivesjsc &url=https://jsc.gov.mv/cluster-map`} ><i className="fa fa-twitter"></i></a> 
              <a rel="noreferrer"  onClick={share} ><i className="fa fa-share"></i></a>
              </div>
              
            </div>
            </div>
          </div>
          {size.width < 768 ? <Map updateAtoll={updateAtoll}></Map> : <></>}
        </div>
      </div>
    </div>
  );
};

export default Home;
