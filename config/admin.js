module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fafa41fbc80e6ad367ef6f145ee46dc0'),
  },
});
