import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { siteConfig } from "../lib/config/site";
import { experienceConfig } from "../lib/config/experience";

const INK = "#000000";

const s = StyleSheet.create({
  page: { padding: 48, fontFamily: "Helvetica", fontSize: 10, color: INK },
  name: { fontSize: 18, fontFamily: "Helvetica-Bold" },
  contact: { fontSize: 10, marginTop: 4 },
  section: { marginTop: 14 },
  h2: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    borderBottomWidth: 1,
    borderBottomColor: INK,
    paddingBottom: 2,
    marginBottom: 6,
  },
  p: { fontSize: 10, lineHeight: 1.45 },
  role: { fontFamily: "Helvetica-Bold", fontSize: 10 },
  meta: { fontSize: 9, marginBottom: 3 },
  bullet: { fontSize: 10, lineHeight: 1.45, marginBottom: 1 },
  gap: { marginBottom: 8 },
});

export function AtsCV() {
  return (
    <Document
      author={siteConfig.name}
      title={`${siteConfig.name} — CV (ATS)`}
      subject="Curriculum Vitae"
    >
      <Page size="A4" style={s.page}>
        <Text style={s.name}>{siteConfig.name}</Text>
        <Text style={s.contact}>
          {siteConfig.location} | {siteConfig.email} | {siteConfig.phone}
          {siteConfig.socials.linkedin ? ` | ${siteConfig.socials.linkedin}` : ""}
        </Text>

        <View style={s.section}>
          <Text style={s.h2}>Summary</Text>
          <Text style={s.p}>{experienceConfig.summary}</Text>
        </View>

        <View style={s.section}>
          <Text style={s.h2}>Skills</Text>
          {experienceConfig.skills.map((group) => (
            <Text key={group.name} style={[s.p, { marginBottom: 2 }]}>
              <Text style={{ fontFamily: "Helvetica-Bold" }}>{group.name}: </Text>
              {group.items.join(", ")}
            </Text>
          ))}
        </View>

        <View style={s.section}>
          <Text style={s.h2}>Work Experience</Text>
          {experienceConfig.experience.map((entry) => (
            <View key={entry.company} style={s.gap}>
              <Text style={s.role}>
                {entry.company} — {entry.location}
              </Text>
              <Text style={s.meta}>{entry.dates}</Text>
              {entry.roles.map((role) => (
                <View key={role.title} style={{ marginBottom: 6 }}>
                  <Text style={s.role}>{role.title}</Text>
                  <Text style={s.meta}>{role.dates}</Text>
                  {role.bullets.map((b, i) => (
                    <Text key={i} style={s.bullet}>
                      • {b}
                    </Text>
                  ))}
                </View>
              ))}
            </View>
          ))}
        </View>

        <View style={s.section}>
          <Text style={s.h2}>Education</Text>
          {experienceConfig.education.map((ed) => (
            <View key={ed.school} style={s.gap}>
              <Text style={s.role}>{ed.degree}</Text>
              <Text style={s.p}>
                {ed.school} — {ed.location}
              </Text>
              <Text style={s.meta}>{ed.dates}</Text>
            </View>
          ))}
        </View>

        <View style={s.section}>
          <Text style={s.h2}>Certifications & Training</Text>
          {experienceConfig.certifications.map((c) => (
            <Text key={c.name} style={s.bullet}>
              • {c.name}
            </Text>
          ))}
        </View>

        <View style={s.section}>
          <Text style={s.h2}>Other Professional Activities</Text>
          {experienceConfig.otherActivities.map((a) => (
            <View key={a.org} style={s.gap}>
              <Text style={s.role}>
                {a.role} — {a.org}
              </Text>
              <Text style={s.meta}>{a.dates}</Text>
              <Text style={s.p}>{a.detail}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
