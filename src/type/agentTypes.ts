//get
export type OfficeData = {
  address: string;
  id: number;
  imagePath: [];
  officeName: string;
};

export type PageInfo = {
  currentPage: number;
  pageSize: number;
  totalElement: number;
  totalPages: number;
};

export type MyOfficeResponse = {
  content: [OfficeData];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  size: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  totalElements: number;
  totalPages: number;
};
// post
export type newOfficeData = {
  request: NewOfficeInfo;
  multipartFileList: string[];
};

export type NewOfficeInfo = {
  officeName: string | undefined;
  maxCapacity: number | undefined;
  leaseFee: number | undefined;
  remainRoom: number | undefined;
  address: Address | undefined;
  officeOption: officeOptions | undefined;
};

export type Address = {
  legion: string;
  city: string;
  town: string;
  street: string;
  zipcode: string;
  detail: string;
};

export type officeOptions = {
  [key: string]: boolean;
};
