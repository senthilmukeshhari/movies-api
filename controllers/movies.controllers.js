export const movieGet = (req, res) => {
    res.send('Get all movies...')
}

export const movieCreate = (req, res) => {
    res.json({"message" :  req})
}

export const movieUpdate = (req, res) => {
    res.send('Update all movies...')
}

export const movieDelete = (req, res) => {
    res.send('Delete all movies...')
}