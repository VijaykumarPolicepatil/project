export const MenuList = [
    //Dashboard
    {
        title: 'Dashboard',	
        classsChange: 'mm-collapse',		
        iconStyle: <i className="flaticon-381-networking"></i>,
        to: 'dashboard',
        content: [
            {
                title: 'Admin',
                to: '',					
            },           
            {
                title: 'Telecaller',
                to: '/telecaller',					
            },           
            {
                title: 'Receptionist',
                to: '/receptionist',
            },
            {
                title: 'Doctor',
                to: '/doctor',
            },
            {
                title: 'Counsellor',
                to: '',
            },
            {
                title: 'Medical',
                to: '',                
            },
            {
                title: 'Service Caller',
                to: '',
                
            },            		
			{
                title: 'Panchkarma',
                to: '',                
            },    
        ],
    },
     //Users
     {
        title: 'Users',
        classsChange: 'mm-collapse',
        iconStyle: <i className="flaticon-381-controls-3"></i>,
        content: [
            
            {
                title: 'Roles',
                to: '/',					
            },
            {
                title: 'Users',
                to: '/',					
            },
            // {
            //     title: 'Sparkline',
            //     to: 'chart-sparkline',					
            // },
            // {
            //     title: 'Apexchart',
            //     to: 'chart-apexchart',					
            // },
        ]
    },
    //Apps
    {
        title: 'Patients',	
        classsChange: 'mm-collapse',
        iconStyle: <i className="flaticon-381-television"></i>,
        content: [
            {
                title: 'Leads',
                to: 'app-leads'
            },
             // {
             //   title: "Leads",
             //   to: "app-add-leads",
             // },
            {
                title: 'Patients',
                to: 'app-patients'
            },
            {
                title: "Import Leads",
                to: "app-import-leads",
              
              },
             // {
             //   title: "View Patienst",
             //   to: "app-patient-details",
              
              // },
            //   {
            //     title:'Calendar',
            //     to: 'app-calender'
            // },
             
            // {
            //   title: "Add Patients",
            //   to: "app-patients",
              
            // },
            // {
            //   title: 'Forget Password',
            //   to: 'app-forget-password'
            // },
            
            
        ],
    },
    // Questionnaire
    {
        title:'Questionnaire',
        classsChange: 'mm-collapse',
        iconStyle: <i className="flaticon-381-network"></i>,
        content : [
            {
                title:"Questions",
                to: "questions",
            },
          //{
          //     title:"Add Question",
          //     to: "add-question",
          // },
            {
                title:"Forms",
                to: "forms",
            },
          // {
          //     title:"Create Form",
          //     to: "create-form",
          // },
        ]
    },
     //Settings
     {   
        title:'Settings',
        classsChange: 'mm-collapse',
        iconStyle: <i className="flaticon-381-settings-2"></i>,
        content: [
            {
                title: 'Site Settings',
                to: '/',					
            },
        ]
    },
    //Master
    {
        title: 'Master',	
        classsChange: 'mm-collapse',
        iconStyle: <i className="flaticon-381-internet"></i>,	
        content: [
            {
                title: 'Departments',
                to: '',					
            },
            {
                title: 'Categories',
                to: '',					
            },
            {
                title: 'Diseases',
                to: '',					
            },
            {
                title: 'Medicines',
                to: '',					
            },
            {
                title: 'Disease Medicine Mapping',
                to: '',					
            },
            {
                title: 'Doctors',
                to: '',					
            },
            {
                title: 'Doctors Availability',
                to: '',					
            },
             // {
            //   title: "Users",
            //   to: "ui-user",
            // },
     
        ]
    },
  
    //Pages
    // {
    //     title:'Pages',
    //     classsChange: 'mm-collapse',
    //     iconStyle: <i className="flaticon-381-layer-1"></i>,
    //     content : [
    //         {
    //             title:'Error',
    //             hasMenu : true,
    //             content : [
    //                 {
    //                     title: 'Error 400',
    //                     to : 'page-error-400',
    //                 },
    //                 {
    //                     title: 'Error 403',
    //                     to : 'page-error-403',
    //                 },
    //                 {
    //                     title: 'Error 404',
    //                     to : 'page-error-404',
    //                 },
    //                 {
    //                     title: 'Error 500',
    //                     to : 'page-error-500',
    //                 },
    //                 {
    //                     title: 'Error 503',
    //                     to : 'page-error-503',
    //                 },
    //             ],
    //         },
    //         {
    //             title:'Lock Screen',
    //             to: 'page-lock-screen',
    //         },

    //     ]
    // },
    
]