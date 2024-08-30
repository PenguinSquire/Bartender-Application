"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
let app = express_1.default.Router();
exports.app = app;
exports.app = app;
const drinksList = [
    {
        drinkId: 802674,
        drinkName: "Bloody Mary",
        drinkDescription: "equal parts vodka and tomato juice mixed with lemon juice, hot sauce, Worcestershire sauce, horseradish, fresh herbs, brown sugar and cracked black pepper",
        drinkCost: 16.97,
    },
    {
        drinkId: 802675,
        drinkName: "Amaretto Sour",
        drinkDescription: "made with amaretto liqueur and fresh lemon juice, as well as an egg white",
        drinkCost: 6.46,
    },
    {
        drinkId: 802676,
        drinkName: "Aviation",
        drinkDescription: "made with gin, maraschino liqueur, creme de violette and lemon juice",
        drinkCost: 10.61,
    },
    {
        drinkId: 219304,
        drinkName: "Bellini",
        drinkDescription: "made with Prosecco, peach puree and a little raspberry juice",
        drinkCost: 18.43,
    },
    {
        drinkId: 102674,
        drinkName: "Black Russian",
        drinkDescription: "made simply with two parts coffee liqueur and five parts vodka",
        drinkCost: 12.19,
    },
    {
        drinkId: 864663,
        drinkName: "Boulevardier",
        drinkDescription: "made with sweet vermouth, Campari, and bourbon",
        drinkCost: 21.31,
    },
    {
        drinkId: 971005,
        drinkName: "Brandy Alexander",
        drinkDescription: "made with brandy, cognac, creme de cacao and cream",
        drinkCost: 11.31,
    },
    {
        drinkId: 664239,
        drinkName: "Bronx Cocktail",
        drinkDescription: "made with Gin, dry vermouth, Pimiento-stuffed olives, and a splash or orange juice",
        drinkCost: 18.21,
    },
    {
        drinkId: 816552,
        drinkName: "Clover Club",
        drinkDescription: "made with gin, lemon juice, dry vermouth, raspberry syrup and an egg white",
        drinkCost: 8.34,
    },
    {
        drinkId: 794479,
        drinkName: "Cosmopolitan",
        drinkDescription: "made with citrus vodka, Cointreau, cranberry juice and fresh lime juice",
        drinkCost: 9.68,
    },
    {
        drinkId: 339602,
        drinkName: "Daiquiri",
        drinkDescription: "made with rum, lime juice and sugar",
        drinkCost: 17.82,
    },
    {
        drinkId: 719362,
        drinkName: "Dark and Stormy",
        drinkDescription: "begins with dark rum before being mixed with ginger beer and lime juice",
        drinkCost: 14.37,
    },
    {
        drinkId: 396787,
        drinkName: "French 75",
        drinkDescription: "made with sugar, lemon juice, gin, and champagne",
        drinkCost: 7.23,
    },
    {
        drinkId: 933908,
        drinkName: "Gimlet",
        drinkDescription: "made with equal parts gin and Lime Juice, as well as some simple syrup",
        drinkCost: 17.20,
    },
    {
        drinkId: 921671,
        drinkName: "Gin and Tonic",
        drinkDescription: "made with just gin and tonic water",
        drinkCost: 5.47,
    },
    {
        drinkId: 759379,
        drinkName: "Gin Fizz",
        drinkDescription: "made with gin, lemon juice, sugar, carbonated water, and an egg white",
        drinkCost: 18.41,
    },
    {
        drinkId: 336662,
        drinkName: "Greyhound",
        drinkDescription: "made with grapefruit juice and vodka",
        drinkCost: 21.92,
    },
    {
        drinkId: 425281,
        drinkName: "Hot Toddy",
        drinkDescription: "made with whiskey, lemon juice, and honey",
        drinkCost: 20.84,
    },
    {
        drinkId: 444922,
        drinkName: "Irish Coffee",
        drinkDescription: "made by adding a shot of whiskey to brewed coffee with simple syrup and topped with cream",
        drinkCost: 11.82,
    },
    {
        drinkId: 934276,
        drinkName: "Long Island Iced Tea",
        drinkDescription: "contains vodka, gin, tequila, light rum, lemon juice, triple sec and a small splash of cola",
        drinkCost: 9.77,
    },
    {
        drinkId: 890531,
        drinkName: "Mai Tai",
        drinkDescription: "made with light rum, dark rum, lime juice, orange curacao, orgeat syrup, and rock candy syrup",
        drinkCost: 6.85,
    },
    {
        drinkId: 232547,
        drinkName: "Manhattan",
        drinkDescription: "made with rye whiskey, sweet vermouth and bitters",
        drinkCost: 19.83,
    },
    {
        drinkId: 760071,
        drinkName: "Martini",
        drinkDescription: "made with gin, dry vermouth and garnished with a lemon twist",
        drinkCost: 13.27,
    },
    {
        drinkId: 472179,
        drinkName: "Mimosa",
        drinkDescription: "made with equal parts of sparkling wine and orange juice",
        drinkCost: 15.24,
    },
    {
        drinkId: 547449,
        drinkName: "Mint Julep",
        drinkDescription: "made with Kentucky bourbon, simple syrup, mint leaves and crushed ice",
        drinkCost: 6.96,
    },
    {
        drinkId: 287809,
        drinkName: "Mojito",
        drinkDescription: "made with muddled mint, white rum, lime juice, simple syrup and a splash of club soda",
        drinkCost: 21.42,
    },
    {
        drinkId: 567868,
        drinkName: "Moscow Mule",
        drinkDescription: "made with vodka, lime juice and ginger beer",
        drinkCost: 8.75,
    },
    {
        drinkId: 741901,
        drinkName: "Mulled Wine",
        drinkDescription: "made by gently heating wine with fruit, spices, and bourbon",
        drinkCost: 21.40,
    },
    {
        drinkId: 581110,
        drinkName: "Negroni",
        drinkDescription: "made with gin, vermouth, Campari, and a single orange peel",
        drinkCost: 12.58,
    },
    {
        drinkId: 247630,
        drinkName: "Paloma",
        drinkDescription: "made by mixing tequila with lime juice, and a grapefruit-flavored soda",
        drinkCost: 20.17,
    },
    {
        drinkId: 852007,
        drinkName: "Pina Colada",
        drinkDescription: "made with white rum, dark rum, pineapple juice, and coconut cream",
        drinkCost: 14.56,
    },
    {
        drinkId: 464889,
        drinkName: "Planter\'s Punch",
        drinkDescription: "made with dark rum, grenadine, pineapple juice, and a splash of club soda",
        drinkCost: 11.74,
    },
    {
        drinkId: 748254,
        drinkName: "Ramos Fizz",
        drinkDescription: "made with gin, lemon juice, lime juice, simple syrup, orange flower water, vanilla, cream, egg whites, and sparkling water",
        drinkCost: 9.93,
    },
    {
        drinkId: 237821,
        drinkName: "Rusty Nail",
        drinkDescription: "made with scotch and Drambuie",
        drinkCost: 14.86,
    },
    {
        drinkId: 387763,
        drinkName: "Sazerac",
        drinkDescription: "made with cognac, absinthe, bitters and sugar",
        drinkCost: 12.06,
    },
    {
        drinkId: 768870,
        drinkName: "Screwdriver",
        drinkDescription: "made with just vodka and orange juice",
        drinkCost: 15.42,
    },
    {
        drinkId: 885203,
        drinkName: "Tequila Sunrise",
        drinkDescription: "made by mixing tequila, orange juice and grenadine",
        drinkCost: 20.70,
    },
    {
        drinkId: 454147,
        drinkName: "Tom Collins",
        drinkDescription: "made with sparkling water, lemon juice, simple syrup, and a London dry gin",
        drinkCost: 18.82,
    },
    {
        drinkId: 326095,
        drinkName: "Vesper",
        drinkDescription: "made with a 3:1 ratio of gin and vodka with a touch of Lillet blanc aperitif",
        drinkCost: 10.78,
    },
];
//Retrieve all Opportunities
app.get("/", (req, res) => {
    res.status(200).send(drinksList);
});
