export const regions = [
    {id: 1, label: 'Andijon'},
    {id: 2, label: "Buxoro"},
    {id: 3, label: "Farg'ona"},
    {id: 4, label: "Jizzax"},
    {id: 5, label: "Xorazm"},
    {id: 6, label: "Namangan"},
    {id: 7, label: "Navoiy"},
    {id: 8, label: "Qashqadaryo"},
    {id: 9, label: "Qoraqolpog'iston"},
    {id: 10, label: "Samarqand"},
    {id: 11, label: "Sirdaryo"},
    {id: 12, label: "Surxondaryo"},
    {id: 13, label: "Toshkent shahri"},
    {id: 14, label: "Toshkent viloyati"},
]

export const center = [
    {id: 1, label: 'Andijon shahri', parent: 1},
    {id: 2, label: "Jalaquduq tumani", parent: 1 },
    {id: 3, label: "Asaka tumani", parent: 1},
    {id: 4, label: "Bo'ston tumani",parent: 1},
    {id: 5, label: "G'ijduon tumani",parent: 2},
    {id: 6, label: "Jondor tumani",parent: 2},
    {id: 7, label: "Kogon tumani",parent: 2},
    {id: 8, label: "Olot tumani",parent: 2},
    {id: 9, label: "Bog'dod tumani",parent: 3},
    {id: 10, label: "Beshariq tumani",parent: 3},
    {id: 11, label: "Quva tumani",parent: 3},
    {id: 12, label: "Rishton tumani",parent: 3},
    {id: 13, label: "Arnasoy tumani",parent: 4},
    {id: 14, label: "Baxmal tumani",parent: 4},
    {id: 15, label: "Forish tumani",parent: 4},
    {id: 16, label: "Jizzax tumani",parent: 4},
    {id: 17, label: "Bog'ot tumani",parent: 5},
    {id: 18, label: "Gurlan tumani",parent: 5},
    {id: 19, label: "Yangibozor tumani",parent: 5},
    {id: 20, label: "Yangiariq tumani",parent: 5},
    {id: 21, label: "Chortoq tumani",parent: 6},
    {id: 22, label: "Chust tumani",parent: 6},
    {id: 23, label: "Kosonsoy tumani",parent: 6},
    {id: 24, label: "Mingbuloq tumani",parent: 6},
    {id: 25, label: "Karmana tumani",parent: 7},
    {id: 26, label: "Konimex tumani",parent: 7},
    {id: 27, label: "Navbahor tumani",parent: 7},
    {id: 28, label: "Nurota tumani",parent: 7},
    {id: 29, label: "Chiroqchi tumani",parent: 8},
    {id: 30, label: "Dehqonobod tumani",parent: 8},
    {id: 31, label: "G'uzor tumani",parent: 8},
    {id: 32, label: "Kasbi tumani",parent: 8},
    {id: 33, label: "Beruniy tumani",parent: 9},
    {id: 34, label: "Bo'zatov tumani",parent: 9},
    {id: 35, label: "Chimboy tumani",parent: 9},
    {id: 36, label: "Ellikqal'a tumani",parent: 9},
    {id: 37, label: "Bulung'ur tumani",parent: 10},
    {id: 38, label: "Ishtixon tumani",parent: 10},
    {id: 39, label: "Kattaqo'rg'on tumani",parent: 10},
    {id: 40, label: "Narpay tumani",parent: 10},
    {id: 41, label: "Oqoltin tumani",parent: 11},
    {id: 42, label: "Guliston tumani",parent: 11},
    {id: 43, label: "Hovos tumani",parent: 11},
    {id: 44, label: "Mirzaobod tumani",parent: 11},
    {id: 45, label: "Angor tumani",parent: 12},
    {id: 46, label: "Bandixon tumani",parent: 12},
    {id: 47, label: "Bo'ysun tumani",parent: 12},
    {id: 48, label: "Denov tumani",parent: 12},
    {id: 49, label: "Bekobod tumani",parent: 13},
    {id: 50, label: "Bo'ka tumani",parent: 13},
    {id: 51, label: "Bo'stonliq tumani",parent: 13},
    {id: 52, label: "Chinoz tumani",parent: 13},
    {id: 53, label: "Bektemir tumani",parent: 14},
    {id: 54, label: "Chilonzor tumani",parent: 14},
    {id: 55, label: "Mirobod tumani",parent: 14},
    {id: 56, label: "Mirzo Ulug'bek tumani",parent: 14},
    
]

export const age_filter = val =>{
    if(val=='yes'){
        return "18 dan katta"
    }else if(val == 'no'){
        return '18 dan kichik'
    }
}

export const sex_filter = val =>{
    if (val) {
        return 'Erkak'
    }else{
        return 'Ayol'
    }
}

