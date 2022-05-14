import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Category(){
    return(
        <List>
           <NavLink to={'./cuisine/Italian'}>
              <div className="row">
                 <FaPizzaSlice/>
                 <h4>Italian..</h4>
              </div>
              {/** end of  */}
           </NavLink>
              
           <NavLink to={'./cuisine/Ameracano'}>
              <div className="row">
                 <FaHamburger/>
                 <h4>Americano..</h4>
              </div>
              {/** end of  */}
           </NavLink>

           <NavLink to={'./cuisine/Thai'}>
              <div className="row">
                 <GiNoodles/>
                 <h4>Thai..</h4>
              </div>
              {/** end of  */}
           </NavLink>

           <NavLink to={'./cuisine/Japanese'}>
              <div className="row">
                 <GiChopsticks/>
                 <h4>Japanese..</h4>
              </div>
              {/** end of  */}
           </NavLink>
        </List>
        )
}

const List = styled.div`
 display: flex;
 justify-content: center;
 margin: 2rem 0rem;
`;

export default Category;