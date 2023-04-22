const regex=/[^A-Za-z0-9 ]+/g

const inputValidations = (activity) => {
    let errors = {};
    
    if(!activity.name) errors.name = 'Missing Name';
    else if (regex.test(activity.name)) errors.name = 'Only letters, digits, and spaces are allowed.'
     
    if (!activity.difficulty) errors.difficulty = 'Missing difficulty'
   
    if (!activity.duration) errors.duration = 'Missing duration'
    if (activity.duration>24) errors.duration = 'Max duration is 24 hours'
    
    if(!activity.season) errors.season = 'Missing season';

    if (activity.countries.length === 0) errors.countries = 'Missing country';

    return errors;  
}

export default inputValidations;