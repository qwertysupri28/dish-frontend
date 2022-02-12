const columns = [
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
      style: {
        backgroundColor: 'rgba(63, 195, 128, 0.9)',
        color: 'white',
      },
      grow: 3
    },
    {
      name: 'Ingredients',
      selector: 'ingredients',
      sortable: true,
      grow: 13,
    },
    {
      name: 'Diet',
      selector: 'diet',
      sortable: true,
      grow: 2
    },
    {
      name: 'Preparation Time',
      selector: 'prep_time',
      sortable: true,
    },
    {
      name: 'Cooking Time',
      selector: 'cook_time',
      sortable: true,
    },
    {
      name: 'Flavor',
      selector: 'flavor_profile',
      sortable: true,
    },
    {
      name: 'Course',
      selector: 'course',
      sortable: true,
      grow: 2
    },
    {
      name: 'State',
      selector: 'state',
      sortable: true,
      grow: 2,
    },
    {
      name: 'Region',
      selector: 'region',
      sortable: true,
    },
    {
      name: 'Actions',
      selector: 'action',
      sortable: false,
    }
  ];
  
  export default columns