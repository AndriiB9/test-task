function attempt(available, allowed, preferred) {
    let common = available.filter(value => allowed.includes(value) || allowed.includes('any'));
    let result = [];

    function addElement(element) {
        if (!result.includes(element)) {
            result.push(element)
        }
    }

    if (preferred.includes('any')) {
        return common;
    }
    for (preferredItem of preferred) {
        if (common.includes(preferredItem)) {
            addElement(preferredItem);
        } else {
            if (common[length - 1] < preferredItem) {
                addElement(common[length - 1]);
            } else if (common[0] > preferredItem) {
                addElement(common[0]);
            } else {
                let mid = Math.floor(common.length / 2);
                while (mid > 0) {
                    if (common[mid] > preferredItem) {
                        if (common[mid - 1] < preferredItem) {
                            addElement(common[mid]);
                            break;
                        } else {
                            mid = Math.floor(mid / 2);
                            continue;
                        }
                    } else {
                        if (common[mid + 1] > preferredItem) {
                            addElement(common[mid + 1]);
                            break;
                        } else {
                            mid += Math.floor((length - mid - 1) / 2);
                            continue;
                        }
                    }
                }
            }
        }
    }
    return result;
}