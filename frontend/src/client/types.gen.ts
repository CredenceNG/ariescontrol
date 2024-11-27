// This file is auto-generated by @hey-api/openapi-ts

export type Body_login_login_access_token = {
  grant_type?: string | null
  username: string
  password: string
  scope?: string
  client_id?: string | null
  client_secret?: string | null
}

export type HTTPValidationError = {
  detail?: Array<ValidationError>
}

export type ItemCreate = {
  title: string
  description?: string | null
}

export type ItemPublic = {
  title: string
  description?: string | null
  id: string
  owner_id: string
}

export type ItemsPublic = {
  data: Array<ItemPublic>
  count: number
}

export type ItemUpdate = {
  title?: string | null
  description?: string | null
}

export type Message = {
  message: string
}

export type NewPassword = {
  token: string
  new_password: string
}

export type Token = {
  access_token: string
  token_type?: string
}

export type UpdatePassword = {
  current_password: string
  new_password: string
}

export type UserCreate = {
  email: string
  is_active?: boolean
  is_superuser?: boolean
  full_name?: string | null
  password: string
}

export type UserPublic = {
  email: string
  is_active?: boolean
  is_superuser?: boolean
  full_name?: string | null
  id: string
}

export type UserRegister = {
  email: string
  password: string
  full_name?: string | null
}

export type UsersPublic = {
  data: Array<UserPublic>
  count: number
}

export type UserUpdate = {
  email?: string | null
  is_active?: boolean
  is_superuser?: boolean
  full_name?: string | null
  password?: string | null
}

export type UserUpdateMe = {
  full_name?: string | null
  email?: string | null
}

export type ValidationError = {
  loc: Array<string | number>
  msg: string
  type: string
}

export type ReadItemsData = {
  limit?: number
  skip?: number
}

export type ReadItemsResponse = ItemsPublic

export type CreateItemData = {
  requestBody: ItemCreate
}

export type CreateItemResponse = ItemPublic

export type ReadItemData = {
  id: string
}

export type ReadItemResponse = ItemPublic

export type UpdateItemData = {
  id: string
  requestBody: ItemUpdate
}

export type UpdateItemResponse = ItemPublic

export type DeleteItemData = {
  id: string
}

export type DeleteItemResponse = Message

export type LoginAccessTokenData = {
  formData: Body_login_login_access_token
}

export type LoginAccessTokenResponse = Token

export type TestTokenResponse = UserPublic

export type RecoverPasswordData = {
  email: string
}

export type RecoverPasswordResponse = Message

export type ResetPasswordData = {
  requestBody: NewPassword
}

export type ResetPasswordResponse = Message

export type RecoverPasswordHtmlContentData = {
  email: string
}

export type RecoverPasswordHtmlContentResponse = string

export type ReadUsersData = {
  limit?: number
  skip?: number
}

export type ReadUsersResponse = UsersPublic

export type CreateUserData = {
  requestBody: UserCreate
}

export type CreateUserResponse = UserPublic

export type ReadUserMeResponse = UserPublic

export type DeleteUserMeResponse = Message

export type UpdateUserMeData = {
  requestBody: UserUpdateMe
}

export type UpdateUserMeResponse = UserPublic

export type UpdatePasswordMeData = {
  requestBody: UpdatePassword
}

export type UpdatePasswordMeResponse = Message

export type RegisterUserData = {
  requestBody: UserRegister
}

export type RegisterUserResponse = UserPublic

export type ReadUserByIdData = {
  userId: string
}

export type ReadUserByIdResponse = UserPublic

export type UpdateUserData = {
  requestBody: UserUpdate
  userId: string
}

export type UpdateUserResponse = UserPublic

export type DeleteUserData = {
  userId: string
}

export type DeleteUserResponse = Message

export type TestEmailData = {
  emailTo: string
}

export type TestEmailResponse = Message

export type HealthCheckResponse = boolean