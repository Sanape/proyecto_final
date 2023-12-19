import {
  NotFoundError,
  ServerError,
  UnauthenticatedError,
  BadRequestError,
  UserNotFoundError,
  FilterNotProvidedError,
  CannotAddProductToBoughtCartError,
  ProductAlreadyAddedToCartError,
  CannotRemoveProductToBoughtCartError,
  ProductNotAddedToCartError,
  CartNotFoundError,
  UnauthorizedError,
  CartAlreadyBoughtError,
  EmptyCartError,
  ProductAlreadyBelongsToCategoryError,
  ProductNotBelongsToCategoryError,
  ProductNotFoundError,
  UserAlreadyExistsError,
  EmailOrPasswordWrongError,
  ResetPasswordTokenExpiredError,
  InvalidResetPasswordTokenError,
  BadLoginMethodError,
  AttributeNotAllowedError,
  MissingAttributeError,
  EmailIsRequiredError,
  InvalidEmailError,
  PasswordIsRequiredError,
  InvalidPasswordError,
  DatabaseConnectionFailedError
} from "./customErrors.js";

export const errors = {
  NOT_FOUND: NotFoundError,
  SERVER_ERROR: ServerError,
  UNAUTHENTICATED: UnauthenticatedError,
  UNAUTHORIZED: UnauthorizedError,
  BAD_REQUEST: BadRequestError,
  USER_NOT_FOUND: UserNotFoundError,
  FILTER_NOT_PROVIDED: FilterNotProvidedError,
  PRODUCT_CANNOT_ADD_TO_BOUGHT_CART: CannotAddProductToBoughtCartError,
  PRODUCT_ALREADY_ADDED_TO_CART: ProductAlreadyAddedToCartError,
  PRODUCT_CANNOT_REMOVE_FROM_BOUGHT_CART: CannotRemoveProductToBoughtCartError,
  PRODUCT_NOT_ADDED_TO_CART: ProductNotAddedToCartError,
  CART_NOT_FOUND: CartNotFoundError,
  CART_ALREADY_BOUGHT: CartAlreadyBoughtError,
  EMPTY_CART: EmptyCartError,
  PRODUCT_ALREADY_BELONG_CATEGORY: ProductAlreadyBelongsToCategoryError,
  PRODUCT_NOT_BELONG_CATEGORY: ProductNotBelongsToCategoryError,
  PRODUCT_NOT_FOUND: ProductNotFoundError,
  USER_ALREADY_EXISTS: UserAlreadyExistsError,
  EMAIL_OR_PASSWORD_WRONG: EmailOrPasswordWrongError,
  INVALID_RESET_PASSWORD_TOKEN: InvalidResetPasswordTokenError,
  RESET_PASSWORD_TOKEN_EXPIRED: ResetPasswordTokenExpiredError,
  BAD_LOGIN_METHOD: BadLoginMethodError,
  ATTRIBUTE_NOT_ALLOWED: AttributeNotAllowedError,
  MISSING_ATTRIBUTES: MissingAttributeError,
  EMAIL_IS_REQUIRED: EmailIsRequiredError,
  INVALID_EMAIL: InvalidEmailError,
  PASSWORD_IS_REQUIRED: PasswordIsRequiredError,
  INVALID_PASSWORD: InvalidPasswordError,
  DATABASE_CONNECTION_FAILED: DatabaseConnectionFailedError,
};
