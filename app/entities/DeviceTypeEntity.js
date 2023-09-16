'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _BaseEntity2 = require('./BaseEntity');

var _BaseEntity3 = _interopRequireDefault(_BaseEntity2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DeviceTypeEntity = function (_BaseEntity) {
	_inherits(DeviceTypeEntity, _BaseEntity);

	function DeviceTypeEntity() {
		_classCallCheck(this, DeviceTypeEntity);

		var _this = _possibleConstructorReturn(this, (DeviceTypeEntity.__proto__ || Object.getPrototypeOf(DeviceTypeEntity)).call(this));

		_this.id = null;
		_this.name = null;
		_this.description = null;
		_this.created_date = null;
		_this.created_by = null;
		_this.status = 1;
		_this.updated_date = null;
		_this.updated_by = null;

		return _this;
	}

	return DeviceTypeEntity;
}(_BaseEntity3.default);

exports.default = DeviceTypeEntity;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbnRpdGllcy9EZXZpY2VUeXBlRW50aXR5LmpzIl0sIm5hbWVzIjpbIkRldmljZVR5cGVFbnRpdHkiLCJpZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImNyZWF0ZWRfZGF0ZSIsImNyZWF0ZWRfYnkiLCJzdGF0dXMiLCJ1cGRhdGVkX2RhdGUiLCJ1cGRhdGVkX2J5IiwiQmFzZUVudGl0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVNQSxnQjs7O0FBQ0wsNkJBQWM7QUFBQTs7QUFBQTs7QUFFYixRQUFLQyxFQUFMLEdBQVUsSUFBVjtBQUNBLFFBQUtDLElBQUwsR0FBWSxJQUFaO0FBQ0EsUUFBS0MsV0FBTCxHQUFtQixJQUFuQjtBQUNBLFFBQUtDLFlBQUwsR0FBb0IsSUFBcEI7QUFDQSxRQUFLQyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsUUFBS0MsTUFBTCxHQUFjLENBQWQ7QUFDQSxRQUFLQyxZQUFMLEdBQW9CLElBQXBCO0FBQ0EsUUFBS0MsVUFBTCxHQUFrQixJQUFsQjs7QUFUYTtBQVdiOzs7RUFaNkJDLG9COztrQkFjaEJULGdCIiwiZmlsZSI6IkRldmljZVR5cGVFbnRpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZUVudGl0eSBmcm9tICcuL0Jhc2VFbnRpdHknO1xuXG5jbGFzcyBEZXZpY2VUeXBlRW50aXR5IGV4dGVuZHMgQmFzZUVudGl0eSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5pZCA9IG51bGw7XG5cdFx0dGhpcy5uYW1lID0gbnVsbDtcblx0XHR0aGlzLmRlc2NyaXB0aW9uID0gbnVsbDtcblx0XHR0aGlzLmNyZWF0ZWRfZGF0ZSA9IG51bGw7XG5cdFx0dGhpcy5jcmVhdGVkX2J5ID0gbnVsbDtcblx0XHR0aGlzLnN0YXR1cyA9IDE7XG5cdFx0dGhpcy51cGRhdGVkX2RhdGUgPSBudWxsO1xuXHRcdHRoaXMudXBkYXRlZF9ieSA9IG51bGw7XG5cdFx0XG5cdH1cbn1cbmV4cG9ydCBkZWZhdWx0IERldmljZVR5cGVFbnRpdHk7Il19