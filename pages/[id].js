import Head from "next/head";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import Map from "../components/Map";
import ClusterDetail from "../components/Clusterdetail";

const Dhaaira = () => {
    
    const router = useRouter()

    const fetchapi = async () => {
        let response = await fetch('http://localhost:3000/api/atolls')
        response = await response.json()
        const urlatoll = response[router.query.id]
        setState({ ...state, selectedAtoll: urlatoll });
    }
    useEffect(() => {
        fetchapi()
    }, [router])
    
    const [state, setState] = useState({
        selectedAtoll: router.query.id,
        atolls: '',
      });
    const updateAtoll = (atoll) => {
        router.push(`/${atoll}`)
     };

    return (
        <div>
      <Head>
        <title>Cluster Map</title>
      </Head>

      <div className="container pb-3 mt-3">
        <div className="row">
          
          <Map updateAtoll={updateAtoll} ></Map>
          
          <ClusterDetail selectedAtoll={state.selectedAtoll} ></ClusterDetail>
        </div>
      </div>
    </div>
    )
}

export default Dhaaira