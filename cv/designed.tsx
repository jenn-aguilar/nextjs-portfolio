import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";
import { siteConfig } from "../lib/config/site";
import { experienceConfig } from "../lib/config/experience";

const ACCENT = "#7C3AED";
const INK = "#111827";
const INK_MUTED = "#4B5563";
const INK_FAINT = "#6B7280";
const BG_SOFT = "#F5F3FF";
const LINE = "#E5E7EB";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    fontFamily: "Helvetica",
    fontSize: 9,
    color: INK,
    backgroundColor: "#FFFFFF",
  },
  left: { width: "34%", backgroundColor: BG_SOFT, padding: 24 },
  right: { width: "66%", padding: 24 },
  name: { fontSize: 22, fontFamily: "Helvetica-Bold", color: INK, lineHeight: 1.1 },
  role: {
    marginTop: 6,
    fontSize: 10,
    color: ACCENT,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 0.5,
  },
  block: { marginTop: 16 },
  smallTitle: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 1.2,
    color: ACCENT,
    textTransform: "uppercase",
    marginBottom: 6,
  },
  sectionTitle: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 1,
    color: ACCENT,
    textTransform: "uppercase",
    marginBottom: 8,
  },
  smallText: { fontSize: 9, color: INK, lineHeight: 1.4 },
  muted: { color: INK_MUTED },
  faint: { color: INK_FAINT, fontSize: 8 },
  contact: { marginBottom: 4, lineHeight: 1.4 },
  chip: {
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 3,
    marginBottom: 3,
    fontSize: 7.5,
    color: INK_MUTED,
    borderWidth: 0.5,
    borderColor: LINE,
  },
  chipRow: { flexDirection: "row", flexWrap: "wrap", marginTop: 4 },
  role_h: { fontSize: 10.5, fontFamily: "Helvetica-Bold", color: INK },
  role_meta: { fontSize: 8, color: INK_FAINT, marginTop: 1, marginBottom: 4 },
  bullet: { fontSize: 8.5, color: INK_MUTED, lineHeight: 1.4, marginBottom: 2 },
  roleBlock: { marginBottom: 8 },
  companyBlock: {
    marginBottom: 12,
    paddingLeft: 8,
    borderLeftWidth: 1.5,
    borderLeftColor: ACCENT,
  },
  companyName: { fontSize: 11, fontFamily: "Helvetica-Bold", color: INK },
  companyMeta: { fontSize: 8, color: INK_FAINT, marginBottom: 4 },
  accentBar: {
    height: 3,
    width: 42,
    backgroundColor: ACCENT,
    marginTop: 4,
    marginBottom: 8,
  },
  summary: { fontSize: 9, color: INK_MUTED, lineHeight: 1.5, marginBottom: 8 },
});

export function DesignedCV() {
  return (
    <Document
      author={siteConfig.name}
      title={`${siteConfig.name} — CV`}
      subject="Curriculum Vitae"
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.left}>
          <Text style={styles.name}>{siteConfig.name}</Text>
          <Text style={styles.role}>Senior SWE · AI Engineer · Founder</Text>
          <View style={styles.accentBar} />

          <View style={styles.block}>
            <Text style={styles.smallTitle}>Contact</Text>
            <Text style={[styles.smallText, styles.contact]}>{siteConfig.location}</Text>
            <Link
              src={`mailto:${siteConfig.email}`}
              style={[styles.smallText, styles.contact, { color: ACCENT }]}
            >
              {siteConfig.email}
            </Link>
            <Text style={[styles.smallText, styles.contact]}>{siteConfig.phone}</Text>
            {siteConfig.socials.linkedin && (
              <Link
                src={siteConfig.socials.linkedin}
                style={[styles.smallText, styles.contact, { color: ACCENT }]}
              >
                LinkedIn
              </Link>
            )}
            {siteConfig.siteUrl && (
              <Link
                src={siteConfig.siteUrl}
                style={[styles.smallText, styles.contact, { color: ACCENT }]}
              >
                {siteConfig.siteUrl.replace(/https?:\/\//, "")}
              </Link>
            )}
          </View>

          <View style={styles.block}>
            <Text style={styles.smallTitle}>Skills</Text>
            {experienceConfig.skills.map((group) => (
              <View key={group.name} style={{ marginBottom: 6 }}>
                <Text style={[styles.faint, { marginBottom: 2 }]}>
                  {group.name.toUpperCase()}
                </Text>
                <View style={styles.chipRow}>
                  {group.items.map((s) => (
                    <Text key={s} style={styles.chip}>
                      {s}
                    </Text>
                  ))}
                </View>
              </View>
            ))}
          </View>

          <View style={styles.block}>
            <Text style={styles.smallTitle}>Education</Text>
            {experienceConfig.education.map((ed) => (
              <View key={ed.school} style={{ marginBottom: 6 }}>
                <Text style={[styles.smallText, { fontFamily: "Helvetica-Bold" }]}>
                  {ed.degree}
                </Text>
                <Text style={[styles.smallText, styles.muted]}>{ed.school}</Text>
                <Text style={styles.faint}>
                  {ed.location} · {ed.dates}
                </Text>
              </View>
            ))}
          </View>

          <View style={styles.block}>
            <Text style={styles.smallTitle}>Certifications</Text>
            {experienceConfig.certifications.map((c) => (
              <Text
                key={c.name}
                style={[styles.smallText, styles.muted, { marginBottom: 3 }]}
              >
                • {c.name}
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.right}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text style={styles.summary}>{experienceConfig.summary}</Text>

          <Text style={[styles.sectionTitle, { marginTop: 8 }]}>Experience</Text>
          {experienceConfig.experience.map((entry) => (
            <View key={entry.company} style={styles.companyBlock} wrap={false}>
              <Text style={styles.companyName}>{entry.company}</Text>
              <Text style={styles.companyMeta}>
                {entry.location} · {entry.dates}
              </Text>
              {entry.positions.map((position) => (
                <View key={position.title} style={styles.roleBlock}>
                  <Text style={styles.role_h}>{position.title}</Text>
                  <Text style={styles.role_meta}>{position.dates}</Text>
                  {position.bullets.map((b, i) => (
                    <Text key={i} style={styles.bullet}>
                      • {b}
                    </Text>
                  ))}
                </View>
              ))}
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
