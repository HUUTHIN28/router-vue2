import HomeIcon from "@/assets/icon/homeIcon";
import About from "@/assets/icon/aboutIcon";
import Location from "@/assets/icon/locationIcon";
import HomeStay from "@/assets/icon/homeStayIcon";
import Drink from "@/assets/icon/drinkIcon";
import Entertainment from "@/assets/icon/entertaimentIcon";
import LogOut from "@/assets/icon/logOutIcon";

export const URL = {
  LOGIN: "/log-in",
  LOCATION: "/location",
  HOMES: "/home-stay",
};
export const narBar = [
  {
    name: "Home",
    path: "/home",
    icon: HomeIcon,
  },
  {
    name: "About",
    path: "/about",
    icon: About,
  },
  {
    name: "Location",
    path: "/location",
    icon: Location,
  },
  {
    name: "HomeStay",
    path: "/home-stay",
    icon: HomeStay,
  },
  {
    name: "Drink",
    path: "/drink",
    icon: Drink,
  },
  {
    name: "Entertainment",
    path: "/entertainment",
    icon: Entertainment,
  },
  {
    name: "LogOut",
    path: "/login",
    icon: LogOut,
  },
];

export const listFilterHomeStay = [
  {
    name: "Dùng các bộ lọc cũ",
    list: [
      {
        name: "Tuyệt hảo: 9 điểm trở lên 3 Dựa trên đánh giá của khách",
        code: "TH",
      },
    ],
  },
  {
    name: "Các bộ lọc phổ biến",
    list: [
      { name: "Căn hộ", code: "CH" },
      { name: "Chỗ đỗ xe", code: "CDX" },
      { name: "Khách sạn", code: "KS" },
      { name: "Hồ bơi", code: "HB" },
      { name: "Phòng tắm riêng", code: "PTR" },
      { name: "WiFi miễn phí", code: "WIFI" },
      { name: "Ban công", code: "BC" },
      { name: "Khu vực bếp", code: "KVB" },
    ],
  },
  {
    name: "Loại chỗ ở",
    list: [
      { name: "Chỗ nghỉ nhà dân", code: "CND" },
      { name: "Căn hộ", code: "CH" },
      { name: "Nhà nghỉ giữa thiên nhiên", code: "NNTN" },
      { name: "Khách sạn", code: "KS" },
      { name: "Resort", code: "RS" },
      { name: "Nhà nghỉ B&B", code: "NNBB" },
    ],
  },
  {
    name: "Tiện nghi",
    list: [
      { name: "Chỗ đỗ xe", code: "CDX" },
      { name: "WiFi miễn phí", code: "WIFI" },
      { name: "Nhà hàng", code: "NH" },
      { name: "Cho phép mang theo vật nuôi", code: "PET" },
      { name: "Dịch vụ phòng", code: "DVPH" },
      { name: "Lễ tân 24 giờ", code: "LT24" },
      { name: "Phòng không hút thuốc", code: "PKHT" },
      { name: "Xe đưa đón sân bay", code: "XDDB" },
      { name: "Phòng gia đình", code: "PGD" },
      { name: "Trung tâm Spa & chăm sóc sức khoẻ", code: "SPA" },
      { name: "Hồ bơi", code: "HB" },
    ],
  },
  {
    name: "Tiện nghi phòng",
    list: [
      { name: "Khu vực bếp", code: "KVB" },
      { name: "Phòng tắm riêng", code: "PTR" },
      { name: "Điều hòa không khí", code: "DHKK" },
      { name: "Ban công", code: "BC" },
      { name: "Vòi sen", code: "VS" },
      { name: "TV", code: "TV" },
      { name: "Bồn tắm", code: "BT" },
      { name: "Tủ lạnh", code: "TL" },
      { name: "Nhà vệ sinh", code: "NVS" },
      { name: "TV màn hình phẳng", code: "TVMP" },
      { name: "Tầm nhìn ra khung cảnh", code: "TNKC" },
      { name: "Sân hiên", code: "SH" },
      { name: "Khăn tắm", code: "KT" },
      { name: "Giấy vệ sinh", code: "GVS" },
      { name: "Máy sấy tóc", code: "MST" },
      { name: "Máy pha trà/cà phê", code: "MPTCP" },
      { name: "Máy pha cà phê/trà", code: "MPCT" },
      { name: "Khu vực tiếp khách", code: "KTK" },
      { name: "Ghế sofa", code: "GS" },
      { name: "Lò vi sóng", code: "LVS" },
      { name: "Hệ thống sưởi", code: "HTS" },
      { name: "Ổ điện gần giường", code: "ODGG" },
      { name: "Ra trải giường", code: "RTG" },
      { name: "Bàn ủi", code: "BU" },
      { name: "Ấm đun nước điện", code: "ADND" },
    ],
  },
  {
    name: "Xếp hạng chỗ nghỉ",
    list: [
      { name: "2 sao", code: "2Star" },
      { name: "3 sao", code: "3Star" },
      { name: "Không xếp hạng", code: "NO" },
    ],
  },
  {
    name: "Các hoạt động thú vị",
    list: [
      { name: "Karaoke", code: "KAR" },
      { name: "Sân chơi trẻ em", code: "PLG" },
      { name: "Tour đi bộ", code: "WAL" },
      { name: "Tour/lớp về văn hóa địa phương", code: "CUL" },
      { name: "Đi bộ đường dài", code: "LON" },
    ],
  },
  {
    name: "Điểm đánh giá của khách",
    list: [
      { name: "Tuyệt hảo: 9 điểm trở lên", code: "EXC" },
      { name: "Rất tốt: 8 điểm trở lên", code: "GRT" },
      { name: "Tốt: 7 điểm trở lên", code: "GD" },
      { name: "Dễ chịu: 6 điểm trở lên", code: "COM" },
    ],
  },
];
