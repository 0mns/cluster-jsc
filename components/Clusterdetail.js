const ClusterDetail = (props) => {
    return (
        <div className="col-lg-8">

        <div className="row mb-5">
          <div className="col-sm-6">
            <h1 className="mt-5 mb-5">{props.selectedAtoll}</h1>

            <div className="row mb-5 ">
              <div className="col ">
                <div className="col"><h5>3</h5></div>
                <div className="col"><h6>ކްލަސްޓާރ</h6></div>
              </div>
              <div className="col">
                <div className="col"><h5>300</h5></div>
                <div className="col"><h6>ޖުމްލަ މައްސަލަ</h6></div>
              </div>
              <div className="col">
                <div className="col"><h5>1000</h5></div>
                <div className="col"><h6>ނިމުނު މައްސަލަ</h6></div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 rounded-lg">
            <img className="atoll-map " src="./img/rrr.png" />
          </div>
        </div>

        <div className="">
          <div>
            <div className=" px-3 py-2 mb-2">
              <h4>A1 ކްލަސްޓާރ</h4>
            </div>
            
          </div>

          <div className="p-3 border-bottom">
            <div className="mb-3">
              <h3>ހއ. ނޮޅިވަރަމް</h3>
            </div>
            <div className="mb-3 ">
             <h5><span className="badge badge-primary">ހއ. ނޮޅިވަރަމް</span></h5> 
            </div>
            <div className="row">
              <div className="col-sm-8">
                <div>
                  
                  <p></p>
                </div>
              </div>
              <div className="col-2">col-1</div>
              <div className="col-2">col-1</div>
            </div>  
          </div>
          
        </div>
        

      </div>
    )
}
export default ClusterDetail