const Profile = require('../model/Profile')

module.exports = {
    async index(req, res) {
        return res.render("profile", {profile : await Profile.get()})
    },


    async update(req, res) {
        //req.body para pegar os dados
        const data = req.body

        //definir quantas semanas tem um ano: 52
        const weeksPerYear = 52
        // removver as semanas de ferias do ano, para pegar quantas semanas tem em 1 ano
        const weeksPerMonth = (weeksPerYear - data["vacation-per-year"] )/ 12

        // quantas horas por semana estao trabalhando
        const weekTotalHours = data["hours-per-day"] * data["days-per-week"]

        // horas trabalhando no mes
        const monthTotalHours = weekTotalHours * weeksPerMonth

        // qual sera o valor da horas
        const valueHour = data["monthly-budget"] / monthTotalHours

        const profile = await Profile.get()

        await Profile.update({
            ...profile,
            ...req.body,
            "value-hour": valueHour
        }) 
       
       
        return res.redirect('/profile')
    }
}