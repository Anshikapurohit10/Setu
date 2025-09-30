
const requireRole = (roles) => (req, res, next) => {
  const allowed = Array.isArray(roles) ? roles : [roles];
  if (!req.user) return res.status(401).json({ message: "Auth required" });
  if (!allowed.includes(req.user.role)) return res.status(403).json({ message: "Not authorized" });
  next();
};

module.exports = requireRole;
