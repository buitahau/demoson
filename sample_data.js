function PrismaSampleData() {
    var me = this;

    /*
    * Colorant table là cái table chứa thông tin 16 màu cơ bản của thùng sơn. Toàn bộ công thức đều dựa trên việc trộn n / 16 màu này
    * lại với nhau.
    * */

    var COLOR_A = me.generateColorantEntity("A", "Blue", 1.95, 48, 128, 207, null);
    var COLOR_B = me.generateColorantEntity("B", "Violet", 0.98, 125, 71, 199, null);
    var COLOR_C = me.generateColorantEntity("C", "Red", 1.06, 240, 0, 61, null);
    var COLOR_D = me.generateColorantEntity("D", "Pale Yellow", 1.37, 232, 250, 105, null);
    var COLOR_E = me.generateColorantEntity("E", "Graphite Black", 1, 0, 0, 0, null);
    var COLOR_F = me.generateColorantEntity("F", "Pale Red", 1.27, 249, 132, 143, null);
    var COLOR_G = me.generateColorantEntity("G", "Pale Blue", 1.01, 10, 173, 235, null);
    var COLOR_H = me.generateColorantEntity("H", "Orange", 1.03, 255, 92, 23, null);
    var COLOR_I = me.generateColorantEntity("I", "Yellow", 1.12, 255, 215, 55, null);
    var COLOR_J = me.generateColorantEntity("J", "Dirty yellow", 1.16, 230, 156, 19, null);
    var COLOR_K = me.generateColorantEntity("K", "Purple", 1.3, 224, 69, 228, null);
    var COLOR_L = me.generateColorantEntity("L", "Brown", 1.7, 149, 21, 21, null);
    var COLOR_M = me.generateColorantEntity("M", "White", 1.77, 255, 255, 255, null);
    var COLOR_N = me.generateColorantEntity("N", "Green", 1.15, 28, 151, 133, null);
    var COLOR_O = me.generateColorantEntity("O", "Moss Green", 1.09, 126, 149, 94, null);
    var COLOR_P = me.generateColorantEntity("P", "Black", 1.69, 0, 0, 0, null);

    this.getListColorantEntities = function () {
        var listItems = [
            COLOR_A, COLOR_B, COLOR_C, COLOR_D, COLOR_E, COLOR_F, COLOR_G, COLOR_H,
            COLOR_I, COLOR_J, COLOR_K, COLOR_L, COLOR_M, COLOR_N, COLOR_O, COLOR_P
        ];

        return listItems;
    };

    this.generateColorantEntity = function (code, name, density, redV, greenV, blueV, color) {
        return {
            code: code,
            name: name,        // dựa vào 4 giá trị (density, red, green, blue) này để xác định màu. cách tính màu thì chưa xem chưa biết.
            density: density,
            redV: redV,
            greenV: greenV,
            blueV: blueV,
            color: color
        };
    };

    /*
   * Group filter. Cái này dùng để nhóm các formular lại với nhau thành các group. Mỗi code này có 1 ý nghĩa mà quên rồi.
   * */
    var FILTER_GROUP_A = me.generateFilterGroup("A", "Group A");
    var FILTER_GROUP_B = me.generateFilterGroup("B", "Group A");
    var FILTER_GROUP_C3 = me.generateFilterGroup("C3", "Group B3");
    var FILTER_GROUP_D = me.generateFilterGroup("D", "Group C");

    this.getListFilterGroup = function (){
        return [FILTER_GROUP_A, FILTER_GROUP_B, FILTER_GROUP_C3, FILTER_GROUP_D]
    };

    this.generateFilterGroup = function (type, name){
        return {
            type : type,
            name : name
        }
    };

    /*
   * BASE là chỉ loại sơn, trước mắt thì thấy 4 loại sau
   * */
    var BASE_PA = me.generateBaseEntity("PA", "Pale");
    var BASE_EPA = me.generateBaseEntity("EPA", "Extra Pale");
    var BASE_DE = me.generateBaseEntity("DE", "Deep");
    var BASE_EDE = me.generateBaseEntity("EPA", "Extra Deep");

    this.getListBaseEnttities = function (){
        return [
            BASE_PA, BASE_EPA, BASE_DE, BASE_EDE
        ]
    };

    this.generateBaseEntity = function (type, name){
        return {
            type : type,
            name : name
        }
    };


    var COLLECTION_HOUSE = me.generateCollectionEntity("House", FILTER_GROUP_A);
    var COLLECTION_NCS = me.generateCollectionEntity("NCS", FILTER_GROUP_B);
    var COLLECTION_RAL = me.generateCollectionEntity("RAL", FILTER_GROUP_A);
    var COLLECTION_SPECIAL = me.generateCollectionEntity("Special", FILTER_GROUP_B);
    var COLLECTION_SPORT = me.generateCollectionEntity("Sports", FILTER_GROUP_A);
    var COLLECTION_ART = me.generateCollectionEntity("Art", FILTER_GROUP_B);
    var COLLECTION_MUSIC = me.generateCollectionEntity("Music", FILTER_GROUP_A);
    var COLLECTION_GALAXY = me.generateCollectionEntity("Galaxy", FILTER_GROUP_B);

    this.getCollectionEntities = function () {
        var listItems = [
            COLLECTION_HOUSE, COLLECTION_NCS, COLLECTION_RAL, COLLECTION_SPECIAL,
            COLLECTION_SPORT, COLLECTION_ART, COLLECTION_MUSIC, COLLECTION_GALAXY
        ];
    };

    this.generateCollectionEntity = function (collectionName, filterGroup) {
        return {
            collectionName : collectionName,
            filterGroup : filterGroup
        }
    };

    /*
    * Mỗi sản phẩm đều thuộc 1 product.
    * */
                                                                    // 1 - n       1 - n
    var PRODUCT_A = me.generateProductEntity("A", "Egg Shell",    [1, 2.5, 3], [1, 1, 1,   1], FILTER_GROUP_A);
    var PRODUCT_B = me.generateProductEntity("B", "Primer",       [1, 3],      [1, 1, 0.8, 1], FILTER_GROUP_B);
    var PRODUCT_C3 = me.generateProductEntity("C3", "Floor Paint", [1, 3],      [1, 1, 1,   1], FILTER_GROUP_B);
    var PRODUCT_D = me.generateProductEntity("D", "Nautic Paint", [1, 2.5],    [1, 1, 1,   1], FILTER_GROUP_A);
    var PRODUCT_E = me.generateProductEntity("E", "Gloss",        [1, 2.5],    [1, 1, 1,   1], FILTER_GROUP_C3);
    var PRODUCT_S = me.generateProductEntity("S", "ko biet cai gi",  [1, 2.5],    [1, 1, 1,   1], FILTER_GROUP_C3);


    this.getListProductEntities = function () {
        var listItems = [
            PRODUCT_A, PRODUCT_B, PRODUCT_C3, PRODUCT_D, PRODUCT_E
        ];

        return listItems;
    };
    // 1 - n    1 -n       n - 1
    this.generateProductEntity = function (productCode, productName, listVolumes, listBase, filterGroup) {
        return {
            productCode: productCode,
            productName: productName,
            listVolumes: listVolumes,   // danh sách các dung lượng của sản phẩm này, ex, thùng 1 lit, 2.5 lit, hay 3 lit.
            listBase : listBase,        // chưa hiểu ý nghĩa của mối quan hệ giữa base và cái product ở đây
            filterGroup: filterGroup    // giá trị này dùng để tìm kiếm và phân loại thôi. Ở đây ta phân 1 sản phẩm theo từng nhóm để tìm bên trang collection.
        }
    };

    /*
    * Table Dung tích - chả biết tên tiếng anh của nó là gì.
    * Cái table này được generate từ cái table product trên kia, Nó chỉ là show ra cho dễ chọn thôi chứ cũng ko có gì cả.
    * */

    /*
    * Formula : Công thức pha màu.
    * */

    this.getListFormulaEntities = function () {
        var listItems = [
            me.generateFormulaEntity(COLLECTION_HOUSE, [PRODUCT_A, PRODUCT_B, PRODUCT_C3],  "PW5", 1, BASE_PA,  [createColorQuantity(COLOR_A, 2), createColorQuantity(COLOR_B, 4.5)], "08/12/2005", "28000", "Use paintbrush only"),
            me.generateFormulaEntity(COLLECTION_HOUSE, [PRODUCT_D, PRODUCT_S],             "NVB1", 1, BASE_EPA, [createColorQuantity(COLOR_C, 4), createColorQuantity(COLOR_D, 5), createColorQuantity(COLOR_E, 4), createColorQuantity(COLOR_F,5.5), createColorQuantity(COLOR_G, 2), createColorQuantity(COLOR_H , 2)], "08/12/2005", "28000", "Use paintbrush only"),
        ];

        return listItems;

        function createColorQuantity(color, quantity){
            return {color : color, quantity: 2}
        }
    };

    this.generateFormulaEntity = function (collection, products, colorName, baseOnCanSize, base, listColor, formulaDate, colorReview, comment, createBy){
        return {
            collection : collection,
            products : products, // list Products
            colorName : colorName,
            baseOnCanSize : baseOnCanSize, // cái tỉ lệ này tính theo đơn vị là base on Can Size, thường là theo 1 lit. Ví dụ pha 1 lit sơn cần bao nhiêu màu 1, 2, 3, 4...
            base : base,
            listColors : listColor, // màu và tỉ lệ pha {color : quantity} quantity tính theo ml. cái này max là 6 màu thôi.
            formulaDate : formulaDate,
            rgb : colorReview,
            comment: comment,
            createBy : createBy // null - from system, userId
        }
    }



}