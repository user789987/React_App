import PropTypes from 'prop-types';

export default function Course(props){
   if(props.show){
     return(
       <div className="card">
        <img src={props.image} alt={props.name} />
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <h4>Rs{props.price}</h4>
       </div>
    )
   }
   return null;
}

Course.propTypes = {
   name: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired,
   price: PropTypes.number.isRequired,
   image: PropTypes.string.isRequired,
   show: PropTypes.bool.isRequired
}
