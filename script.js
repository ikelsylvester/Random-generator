function generateGroups() {
    // Retrieve names from textarea
    var namesInput = document.getElementById('names');
    var names = namesInput.value.split(',').map(name => name.trim());

    // Generate groups
    var groups = divideIntoGroups(names, 4); // Divide into 4 groups

    // Display groups
    displayGroups(groups);
}

function restart() {
    // Clear the textarea
    var namesInput = document.getElementById('names');
    namesInput.value = '';

    // Clear the groups display
    var groupsDisplay = document.getElementById('groups');
    groupsDisplay.innerHTML = '';
}

function divideIntoGroups(names, numGroups) {
    var groups = [];
    var groupSize = Math.ceil(names.length / numGroups);

    for (var i = 0; i < numGroups; i++) {
        var group = names.slice(i * groupSize, (i + 1) * groupSize);
        groups.push(group);
    }

    return groups;
}

function displayGroups(groups) {
    var groupsDisplay = document.getElementById('groups');
    groupsDisplay.innerHTML = '';

    groups.forEach((group, index) => {
        var groupDiv = document.createElement('div');
        groupDiv.classList.add('group');
        groupDiv.textContent = `Group ${index + 1}: ${group.join(', ')}`;
        groupsDisplay.appendChild(groupDiv);
    });
}
