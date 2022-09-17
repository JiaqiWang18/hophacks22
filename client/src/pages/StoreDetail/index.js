import { customIcons, IconContainer, StyledRating } from 'components/MUI';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { useState } from 'react';
import { get } from 'utils/sdk';
import { pink } from '@mui/material/colors';

const StoreDetail = ({ match }) => {
  const { storeId } = match.params;

  const [storeDetail, setStoreDetail] = useState(null);
  const [accessiblityCats, setAccessiblityCats] = useState([]);

  useState(() => {
    get(`stores/${storeId}`).then(resp => {
      setStoreDetail(resp.data);
    });
    get(`stores/${storeId}/accessibility_categories`).then(resp => {
      setAccessiblityCats(resp.data);
    });
  }, [storeId]);

  const renderedCats = accessiblityCats.map((cat, index) => (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>
        Does it have accessible <b>{cat.name}</b> ?
      </td>
      <td>
        {cat.satisfied ? (
          <CheckCircleIcon color="success" fontSize="large" />
        ) : (
          <CancelIcon sx={{ color: pink[500] }} fontSize="large" />
        )}
      </td>
      <td>
        <img
          className="rounded-l mr-2 ml-auto"
          src={cat.image_evidence}
          alt=""
          style={{ width: '400px' }}
        />
      </td>
    </tr>
  ));

  return (
    storeDetail && (
      <div>
        <div style={{ position: 'relative' }}>
          <img
            className="rounded-l mr-2"
            src={storeDetail.store_image}
            alt=""
            style={{ width: '100vw', height: '50vh', opacity: '0.8' }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '8px',
              left: '16px',
              color: 'white'
            }}>
            <h1 className="display-4">
              <b>{storeDetail.name}</b>
            </h1>
            <div
              className="rounded mb-2"
              style={{
                backgroundColor: 'white',
                opacity: '0.9',
                width: '120px',
                paddingTop: '2px'
              }}>
              <StyledRating
                name="highlight-selected-only"
                defaultValue={2}
                IconContainerComponent={IconContainer}
                getLabelText={value => customIcons[value].label}
                highlightSelectedOnly
                readOnly
              />
            </div>
            <h4 className="display-6 text-gray-300">{storeDetail.address}</h4>
          </div>
        </div>
        <div className="mx-3">
          <h1 className="display-6">Accessibility Checklist</h1>
          <div class="row mx-1">
            {renderedCats.length > 0 ? (
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Rule Name</th>
                    <th scope="col">Satisfied?</th>
                    <th scope="col">Evidence</th>
                  </tr>
                </thead>
                <tbody>{renderedCats}</tbody>
              </table>
            ) : (
              <h3 className="mx-auto mt-5">
                This store has no accessiblity data!
              </h3>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default StoreDetail;
