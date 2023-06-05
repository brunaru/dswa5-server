import passport from 'passport'
import passportJwt from 'passport-jwt'
import Usuario from '../models/usuario.model.js'

const segredo = 'ud%k2iS$KJkd@23jSJK79JK3at'

function autenticar() {
    console.log('autenticar')
    const params = {
        secretOrKey: segredo,
        jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken()
    }
    const strategy = new passportJwt.Strategy(params, function(payload, done) {
        Usuario.findOne({ where: { id: payload.sub } })
        .then(function(user) {
            if (user) {
                return done(null, payload)
            }
            return done(null, false)
        })
        .catch(function(erro) {
            return done(erro, false)
        })
    })
    
    passport.use(strategy)

    return passport.authenticate('jwt', { session: false })
}

export default segredo
export { segredo, autenticar }