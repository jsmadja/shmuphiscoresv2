export interface Player {
  id: number;
  name: string;
  createdAt?: string;
  shmupUserId?: number;
  authenticated?: boolean;
  administrator?: boolean;
  superAdministrator?: boolean;
  hideMedals?: boolean;
  vip?: boolean;
}
