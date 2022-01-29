import styles from "../styles/Clusters.module.css";

const Islands = (props) => {
  return (
    <div>
    {Object.keys(props.data).map((c, index)=>(
         
    
    <div  key={index} className="p-3 border-bottom">
    <div className="row">
      <div className="col-sm-6">
        <div>
          <div className="mb-3 row">
            <div className="col">
              <h3>{c}</h3>
            </div>
            
            
          </div>

          
        </div>
      </div>

     
    </div>
  </div>
        ))}
    </div>
    
  );
};
export default Islands;
