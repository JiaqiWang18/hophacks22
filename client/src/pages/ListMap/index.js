import Map from 'components/Map';
import { customIcons, IconContainer, StyledRating } from 'components/MUI';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { get } from 'utils/sdk';

const ListMap = ({ match }) => {
  const [result, setResult] = useState([]);
  const history = useHistory();

  useEffect(() => {
    //specify that
    console.log(match.params.category);
    get(`stores/?category=${match.params.category}`).then(resp => {
      console.log(resp);
      setResult(resp.data);
    });
  }, []);

  const renderedList = result.map(store => (
    <div
      className="card p-0 my-2 rounded-l"
      onClick={() => {
        history.push(`/store/${store.id}`);
      }}>
      <div class="d-flex flex-row">
        <img
          className="rounded-l mr-2"
          src={store.store_image}
          alt=""
          style={{ width: '200px' }}
        />
        <div className="card-content d-flex flex-column">
          <h4 className="pt-2">{store.name}</h4>
          <StyledRating
            name="highlight-selected-only"
            defaultValue={2}
            IconContainerComponent={IconContainer}
            getLabelText={value => customIcons[value].label}
            highlightSelectedOnly
            readOnly
          />
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md" style={{ maxHeight: '100vh' }}>
          {renderedList}
        </div>
        <div className="col-md">
          <Map data={result} />
        </div>
      </div>
    </div>
  );
};

export default ListMap;
