
function createUserProfiles(names, modifiedNames) {
    
    if (names.length !== modifiedNames.length) {
        throw new Error('The arrays must be of the same length');
    }

    
    const userProfiles = names.map((originalName, index) => {
        const modifiedName = modifiedNames[index];
        const id = index + 1; 

        
        return {
            originalName: originalName,
            modifiedName: modifiedName,
            id: id
        };
    });

    return userProfiles;
}


const names =['Gideon', 'is', 'my', 'name', 'dude'];
const modifiedNames = ['gideon', 'IS', 'my', 'NAME', 'dude'];

const profiles = createUserProfiles(names, modifiedNames);
console.log(profiles);


