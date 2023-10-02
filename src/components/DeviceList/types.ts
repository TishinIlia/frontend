export interface Event {
  type: string;
  power: string;
  comment: null;
  deviceId: string;
  metaInfo: null;
  deviceTime: string;
  deviceTxId: string;
  locationId: null;
  requestType: string;
  serverTimestamp: number;
  nextTxEventDateTime: null;
}

export interface DeviceEvent {
  id?: bigint | number;
  requestType: string;
  deviceDateTime?: Date | string | null;
  event?: Event[];
  organizationId?: bigint | number | null;
}

export interface Device {
  id?: bigint | number;
  created?: Date | string;
  modified?: Date | string;
  organizationId?: bigint | number | null;
  imei: string;
  imeiBarcode?: string | null;
  serialNumber: string;
  name?: string | null;
  deviceType?: string;
  deviceSubType?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  orientation?: number | null;
  height?: number | null;
  deviceEvents?: DeviceEvent[];
}
