
/**
 * @swagger
 * resourcePath: /api
 * description: All about API
 */

/**
 * @swagger
 * path: /login/{username}
 * operations:
 *   -  httpMethod: POST
 *      summary: Login with username and password
 *      notes: Returns a user based on username
 *      responseClass: User
 *      nickname: logiasdasd
 *      responseMessages:
 *        - code: 401
 *          message: yesss
 *          responseModel: User
 *      consumes:
 *        - text/html
 *      parameters:
 *        - name: username
 *          description: Your username
 *          paramType: path
 *          required: true
 *          dataType: string
 *        - name: fock
 *          description: Your username
 *          paramType: body
 *          required: true
 *          dataType: string
 *        - name: password
 *          description: Your password
 *          paramType: body
 *          required: true
 *          dataType: User
 */
exports.login = function (req, res) {
  var user = {};
  user.username = req.param('username');
  user.password = req.param('password');
  res.json(user);
}


/**
 * @swagger
 * path: /register
 * operations:
 *   -  httpMethod: POST
 *      summary: Register path for new user
 *      notes: Local registration
 *      responseClass: User
 *      nickname: register
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: user
 *          description: user object
 *          paramType: body
 *          required: true
 *          dataType: User
 *
 */
exports.register = function (req, res) {
  console.log(req.body);
  res.send(req.body);
};


/**
 * @swagger
 * models:
 *   User:
 *     id: User
 *     properties:
 *       username:
 *         type: String
 *       password:
 *         type: String
 */
