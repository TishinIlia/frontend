import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import './DeviceList.css';

import Spinner from '@images/spinner.svg';
import { Device } from '@components/DeviceList/types';

const DeviceList: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [devices, setDevices] = useState<Device[] | null>(null);

  const limits = [10, 25, 50, -1];
  const [limit, setLimit] = useState<number>(limits[0]);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:3000/devices')
      .then((response) => response.json())
      .then((data: Device[]) => setDevices(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="w-full flex justify-center">
        <img src={Spinner} alt="spinner" className="spinner" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full">
        <h1 className="text-xl text-foreground">Something went wrong!</h1>
      </div>
    );
  }

  const getDeviceLastEvent = (device: Device): null | string => {
    if (!device || !device.deviceEvents) {
      return null;
    }
    if (!device.deviceEvents[0]?.deviceDateTime) {
      return null;
    }
    if (device.deviceEvents[0].deviceDateTime instanceof Date) {
      return device.deviceEvents[0].deviceDateTime.toISOString();
    }
    return device.deviceEvents[0].deviceDateTime;
  };

  const setLimitHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setLimit(Number(e.target.value));
  };

  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full border-y border-gray">
                <thead className="bg-background">
                  <tr className="border-t border-gray">
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-foreground sm:pl-6 lg:pl-8"
                    >
                      Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-foreground">
                      Type
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-foreground">
                      Device ID
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-foreground">
                      Last Event Time
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-foreground">
                      Organization ID
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-background">
                  {devices ? (
                    devices.slice(0, limit).map((device) => (
                      <tr key={device.id} className="border-t border-gray">
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-foreground sm:pl-6 lg:pl-8">
                          {device.name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-foreground">
                          <div className="font-medium text-lg">{device.deviceType}</div>
                          <div className="text-gray">{device.deviceSubType}</div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-foreground">
                          {typeof device.id === 'bigint' ? device.id.toString() : device.id}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-foreground">
                          {getDeviceLastEvent(device)}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-foreground">
                          {typeof device.organizationId === 'bigint'
                            ? device.organizationId.toString()
                            : device.organizationId}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td rowSpan={5} className="whitespace-nowrap px-3 py-4 text-sm text-foreground text-center">
                        No data
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="w-full px-4 pt-4 sm:px-6 lg:px-8">
            <select
              className="block w-20 h-8 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={limit}
              name="table_select"
              id="tableSelect"
              onChange={(e) => setLimitHandler(e)}
            >
              {limits.map((limitValue) => (
                <option key={limitValue} value={limitValue}>
                  {limitValue !== -1 ? limitValue : 'all'}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DeviceList;
