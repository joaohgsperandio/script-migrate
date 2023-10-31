import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";

@Entity("users")
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: "text", nullable: true })
  public fullName: string;

  @Column({ type: "text", nullable: true })
  public email: string;

  @Column({ type: "text", nullable: true })
  public remoteId: string | null;

  @Column({ type: "text", nullable: true })
  public authProvider: string | null;

  @Column({ type: "boolean", nullable: false })
  public active: boolean;

  @Column("boolean")
  public emailVerified: boolean;

  @Column({ nullable: false, select: false, type: "text" })
  public emailHash: string;

  @Column({ type: "jsonb" })
  public profile: {
    hd: string;
    id: string;
    email: string;
    picture: string;
    verified_email: boolean;
  };

  @Column({ type: "integer", nullable: true })
  public ownerId: number | null;

  @Column("text")
  public password: string;

  @Column("text")
  public skypeId: string;

  @Column("text")
  public phone: string;

  @Column({ name: "phone_2", type: "text" })
  public phone2?: string | null;

  @Column("boolean")
  public phoneHasWhatsapp: boolean;

  @Column("boolean")
  public phoneHasTelegram: boolean;

  @Column("boolean")
  public phoneHasViber: boolean;

  @Column("boolean")
  public phoneHasSignal: boolean;

  @Column("boolean")
  public phoneHasSnapchat: boolean;

  @Column("boolean")
  public phoneHasThreema: boolean;

  @Column({ name: "phone_has_whatsapp_2", type: "boolean" })
  public phoneHasWhatsapp2: boolean;

  @Column({ name: "phone_has_viber_2", type: "boolean" })
  public phoneHasViber2: boolean;

  @Column({ name: "phone_has_telegram_2", type: "boolean" })
  public phoneHasTelegram2: boolean;

  @Column({ name: "phone_has_signal_2", type: "boolean" })
  public phoneHasSignal2: boolean;

  @Column({ name: "phone_has_snapchat_2", type: "boolean" })
  public phoneHasSnapchat2: boolean;

  @Column({ name: "phone_has_threema_2", type: "boolean" })
  public phoneHasThreema2: boolean;

  @Column({ type: "text", name: "id_document" })
  public idDocument: string | null;

  @Column("boolean")
  public show: boolean;

  @Column({ type: "integer", nullable: true })
  public deletedBy: number | null;

  @Column({ type: "text", nullable: true })
  public githubUsername?: string | null;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;

  @DeleteDateColumn({ nullable: true })
  public deletedAt: Date | null;

  // Implement joins


  // Fields populated by AfterLoad
  rolesCodes: string[];
  projects: { id: number }[];
}
