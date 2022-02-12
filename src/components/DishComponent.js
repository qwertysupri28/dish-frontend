import React, { useState, useEffect } from "react";
import axios from 'axios';
import columns from './DishColumn';
import DataTable from 'react-data-table-component';
import customStyles from './customTableCss';
import { connect } from 'react-redux';
import { setDishDetail } from '../store/action/action';

const DishComponent = ({ dishDetail, setDishDetail }) => {

  //------------------------------------------------------------------------------------------------------------------------
  //State & Variables ------------------------------------------------------------------------------------------------------
    const [refresh, setRefresh] = useState(0);
    const [filterData, setFilterData] = useState({})

    //------------------------------------------------------------------------------------------------------------------------
    //Useeffect ---------------------------------------------------------------------------------------------------------------
        
    useEffect(() => {
      fetchTableData(1, {})
    }, [refresh, filterData]);

    //---------------------------------------------------------------------------------------------------------------------------
    //Datatable:
    const [tableData, settableData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalRows, setTotalRows] = useState(0);
    const [searchKey, setsearchKey] = useState('');
    const [perPage, setPerPage] = useState(10);

    function fetchTableData(page, inptObject) {
        setLoading(true);
        let objectAPI = {
          "currentPage": page,
          "resultPerPage": perPage,
        }
        objectAPI = {...objectAPI, ...filterData}

        axios.post(`http://localhost:3002/dishDetails`, objectAPI).then(response => { 
            settableData(formatDataFortable(response.data.detail));
            setTotalRows(response.data.count)
            setLoading(false);
        })
        .catch(error => {
          console.log('error => ', error)
          setLoading(false);
        }
        );
    }

    function formatDataFortable(dataArray) {
      console.log('data array => ', dataArray);
        let resultArray = []
        for (let i = 0; i < dataArray.length; i++) {
          let tempObj = {}

          let name = <a href={`description?id=${dataArray[i].id}`}>{dataArray[i].name}</a>

          tempObj.name = name;
          tempObj.ingredients = dataArray[i].ingredients;
          tempObj.diet = dataArray[i].diet;
          tempObj.prep_time = dataArray[i].prep_time;
          tempObj.cook_time = dataArray[i].cook_time;
          tempObj.flavor_profile = dataArray[i].flavor_profile;
          tempObj.course = dataArray[i].course;
          tempObj.state = dataArray[i].state;
          tempObj.region = dataArray[i].region;
    
          resultArray.push(tempObj)
        }
        return resultArray
    }

    const handlePerRowsChange = async (newPerPage, page) => {
      setLoading(true);
      setPerPage(newPerPage);
      let objectAPI = {
        "currentPage": page,
        "resultPerPage": newPerPage,
      }

      objectAPI = {...objectAPI, ...filterData}
    
      axios.post(`http://localhost:3002/dishDetails`, objectAPI).then(response => { 
            settableData(formatDataFortable(response.data.detail));
            setTotalRows(response.data.count)
            setLoading(false);
      }).catch(error => {
        console.log('error => ', error)
        setLoading(false);
      }
      );
    };

    const handlePageChange = page => {
      fetchTableData(page, {});
    };

    const handleSort = (column, sortDirection) => {
      console.log(column.selector);
      console.log(sortDirection);
      setFilterData({
        ...filterData,
        "sortColum": column.selector,
        "sortDirection": sortDirection
      })
    };

    const handleKeyPress = (event) => {
      event.persist();
      if (event.keyCode === 13) {
        setFilterData({
          ...filterData,
          "search": searchKey
        })
      }
    };

    //----------------------------------------------------------------------------------------------------------
    //JSX ------------------------------------------------------------------------------------------------------

    return(
        <>
        <h1>Dish Details</h1>
        <ul className="range-slider">
          <li>
            <input name="search" placeholder="Search" value={searchKey} onChange={event => setsearchKey(event.target.value)} id="searchInput" onKeyDown={handleKeyPress} />
            <button type="button" onClick={() => {
              setFilterData({
                ...filterData,
                "search": searchKey
              })
            }}>Search</button>
          </li>
        </ul>

        <div className="table-responsive">
        <DataTable
          columns={columns}
          data={tableData}
          progressPending={loading}
          pagination
          paginationServer
          paginationTotalRows={totalRows}
          onChangeRowsPerPage={handlePerRowsChange}
          onChangePage={handlePageChange}
          progressComponent={<img width="100px" src="assets/images/loader.gif" alt="description" />}
          persistTableHead
          highlightOnHover
          onSort={handleSort}
          sortServer
          striped
          noHeader
          customStyles={customStyles}
        />
      </div>
        </>
    )

};

//---------------------------------------------------------------------------------------------------------------------
// Redux

const mapStateToProps = state => {
  return{
      dishDetail: state.dishDetail
  }
}

const mapDispatchToProps = dispatch => {
  return{
      setDishDetail: (modal, info) => {
          dispatch(setDishDetail({modal: modal, info: info}));
      }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DishComponent);