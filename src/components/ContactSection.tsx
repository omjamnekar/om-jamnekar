"use client";

import { useState } from "react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { Mail, Phone, MapPin, Send, CheckCircle, Upload, Calendar, Clock, FileText, Users, Globe, Download, Eye, X, Plus } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    project: "",
    budget: "",
    timeline: "",
    urgency: "",
    teamSize: "",
    platforms: [] as string[],
    features: [] as string[],
    message: "",
    documents: [] as File[],
    meetingPreference: "",
    communicationPreference: "",
    projectDocuments: {
      requirements: [] as File[],
      designs: [] as File[],
      references: [] as File[],
      contracts: [] as File[],
      other: [] as File[]
    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [activeDocumentCategory, setActiveDocumentCategory] = useState<string | null>(null);
  const [documentPreviews, setDocumentPreviews] = useState<{[key: string]: string}>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ 
        name: "", email: "", phone: "", company: "", project: "", budget: "", 
        timeline: "", urgency: "", teamSize: "", platforms: [], features: [], 
        message: "", documents: [], meetingPreference: "", communicationPreference: "",
        projectDocuments: { requirements: [], designs: [], references: [], contracts: [], other: [] }
      });
      setDocumentPreviews({});
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleFileUpload = (files: FileList | null) => {
    if (files) {
      const newFiles = Array.from(files);
      setFormData(prev => ({
        ...prev,
        documents: [...prev.documents, ...newFiles].slice(0, 10) // Increased to 10 files
      }));
    }
  };

  const handleCategorizedFileUpload = (files: FileList | null, category: keyof typeof formData.projectDocuments) => {
    if (files) {
      const newFiles = Array.from(files);
      
      // Generate previews for image files
      newFiles.forEach(file => {
        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = (e) => {
            setDocumentPreviews(prev => ({
              ...prev,
              [`${category}_${file.name}`]: e.target?.result as string
            }));
          };
          reader.readAsDataURL(file);
        }
      });

      setFormData(prev => ({
        ...prev,
        projectDocuments: {
          ...prev.projectDocuments,
          [category]: [...prev.projectDocuments[category], ...newFiles].slice(0, 5)
        }
      }));
    }
  };

  const removeFileFromCategory = (category: keyof typeof formData.projectDocuments, index: number) => {
    const file = formData.projectDocuments[category][index];
    
    // Remove preview if exists
    setDocumentPreviews(prev => {
      const newPreviews = { ...prev };
      delete newPreviews[`${category}_${file.name}`];
      return newPreviews;
    });

    setFormData(prev => ({
      ...prev,
      projectDocuments: {
        ...prev.projectDocuments,
        [category]: prev.projectDocuments[category].filter((_, i) => i !== index)
      }
    }));
  };

  const getFileIcon = (fileName: string) => {
    const extension = fileName.split('.').pop()?.toLowerCase();
    switch (extension) {
      case 'pdf': return '📄';
      case 'doc': case 'docx': return '📝';
      case 'xls': case 'xlsx': return '📊';
      case 'ppt': case 'pptx': return '📋';
      case 'zip': case 'rar': return '🗜️';
      case 'jpg': case 'jpeg': case 'png': case 'gif': return '🖼️';
      default: return '📎';
    }
  };

  const downloadFile = (file: File) => {
    const url = URL.createObjectURL(file);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const previewFile = (file: File) => {
    if (file.type.startsWith('image/') || file.type === 'application/pdf') {
      const url = URL.createObjectURL(file);
      window.open(url, '_blank');
    } else {
      alert('Preview not available for this file type. You can download it instead.');
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    handleFileUpload(e.dataTransfer.files);
  };

  const removeFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      documents: prev.documents.filter((_, i) => i !== index)
    }));
  };

  const handleCheckboxChange = (name: 'platforms' | 'features', value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: prev[name].includes(value)
        ? prev[name].filter((item: string) => item !== value)
        : [...prev[name], value]
    }));
  };

  if (isSubmitted) {
    return (
      <section className="py-20">
        <Container>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">Thank You!</h2>
            <p className="text-gray-300">Your message has been sent successfully. I&apos;ll get back to you soon!</p>
          </motion.div>
        </Container>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20">
      <Container>
        <SectionHeading>Let&apos;s Work Together</SectionHeading>
        <p className="text-gray-300 text-center mt-4 mb-12 max-w-2xl mx-auto">
          Ready to bring your project to life? Let&apos;s discuss your ideas and create something amazing together.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">your.email@example.com</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">+420 123 456 789</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">Czech Republic</span>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6">
              <h4 className="font-bold text-white mb-2">Quick Response</h4>
              <p className="text-gray-300 text-sm">I typically respond within 24 hours during business days.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-950 border border-gray-800 rounded-xl p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="Your company"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="border-t border-gray-800 pt-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-cyan-400" />
                  Project Details
                </h4>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Project Type *
                    </label>
                    <select
                      name="project"
                      required
                      value={formData.project}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    >
                      <option value="">Select project type</option>
                      <option value="website">Website Development</option>
                      <option value="ecommerce">E-commerce Store</option>
                      <option value="webapp">Web Application</option>
                      <option value="mobile">Mobile App</option>
                      <option value="redesign">Website Redesign</option>
                      <option value="consultation">Consultation</option>
                      <option value="maintenance">Maintenance & Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    >
                      <option value="">Select budget</option>
                      <option value="under-5k">Under $5k</option>
                      <option value="5k-10k">$5k - $10k</option>
                      <option value="10k-25k">$10k - $25k</option>
                      <option value="25k-50k">$25k - $50k</option>
                      <option value="50k-100k">$50k - $100k</option>
                      <option value="100k+">$100k+</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="2-3-months">2-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-months+">6+ months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <Clock className="w-4 h-4 inline mr-1" />
                      Urgency
                    </label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    >
                      <option value="">Select urgency</option>
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="critical">Critical</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <Users className="w-4 h-4 inline mr-1" />
                      Team Size
                    </label>
                    <select
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    >
                      <option value="">Select team size</option>
                      <option value="solo">Solo (Just me)</option>
                      <option value="small">Small (2-5 people)</option>
                      <option value="medium">Medium (6-15 people)</option>
                      <option value="large">Large (16+ people)</option>
                    </select>
                  </div>
                </div>

                {/* Platform Requirements */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    <Globe className="w-4 h-4 inline mr-1" />
                    Target Platforms (select all that apply)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {["Web", "Mobile", "Desktop", "Tablet", "Smart TV", "API", "Admin Panel", "CMS"].map((platform) => (
                      <label key={platform} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.platforms.includes(platform)}
                          onChange={() => handleCheckboxChange("platforms", platform)}
                          className="w-4 h-4 text-cyan-500 bg-gray-900 border-gray-700 rounded focus:ring-cyan-500"
                        />
                        <span className="text-sm text-gray-300">{platform}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Key Features Needed (select all that apply)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      "User Authentication", "Payment Integration", "Database", 
                      "Real-time Updates", "File Upload", "Search", 
                      "Analytics", "Multi-language", "SEO Optimization",
                      "Third-party APIs", "Custom Design", "Performance Optimization"
                    ].map((feature) => (
                      <label key={feature} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.features.includes(feature)}
                          onChange={() => handleCheckboxChange("features", feature)}
                          className="w-4 h-4 text-cyan-500 bg-gray-900 border-gray-700 rounded focus:ring-cyan-500"
                        />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Enhanced Document Upload System */}
              <div className="border-t border-gray-800 pt-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Upload className="w-5 h-5 mr-2 text-cyan-400" />
                  Project Documents & Assets
                </h4>
                
                {/* Document Categories */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6">
                  {[
                    { key: 'requirements', label: 'Requirements', icon: '📋' },
                    { key: 'designs', label: 'Designs/Mockups', icon: '🎨' },
                    { key: 'references', label: 'References', icon: '🔗' },
                    { key: 'contracts', label: 'Contracts/Legal', icon: '📜' },
                    { key: 'other', label: 'Other Files', icon: '📁' }
                  ].map((category) => (
                    <button
                      key={category.key}
                      type="button"
                      onClick={() => setActiveDocumentCategory(
                        activeDocumentCategory === category.key ? null : category.key
                      )}
                      className={`p-3 rounded-lg border text-center transition-all ${
                        activeDocumentCategory === category.key
                          ? 'border-cyan-500 bg-cyan-500/10 text-cyan-300'
                          : 'border-gray-600 hover:border-gray-500 text-gray-300'
                      }`}
                    >
                      <div className="text-lg mb-1">{category.icon}</div>
                      <div className="text-xs font-medium">{category.label}</div>
                      <div className="text-xs text-gray-500 mt-1">
                        ({formData.projectDocuments[category.key as keyof typeof formData.projectDocuments].length})
                      </div>
                    </button>
                  ))}
                </div>

                {/* Category-specific upload area */}
                {activeDocumentCategory && (
                  <div className="mb-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                    <h5 className="text-white font-medium mb-3 flex items-center">
                      <Plus className="w-4 h-4 mr-2" />
                      Upload {activeDocumentCategory.charAt(0).toUpperCase() + activeDocumentCategory.slice(1)}
                    </h5>
                    
                    <div
                      className={`border-2 border-dashed rounded-lg p-4 text-center transition-colors ${
                        dragActive
                          ? "border-cyan-500 bg-cyan-500/10"
                          : "border-gray-600 hover:border-gray-500"
                      }`}
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDragOver={handleDrag}
                      onDrop={(e) => {
                        handleDrop(e);
                        handleCategorizedFileUpload(e.dataTransfer.files, activeDocumentCategory as keyof typeof formData.projectDocuments);
                      }}
                    >
                      <Upload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-300 mb-2">Drop files here or click to upload</p>
                      <p className="text-xs text-gray-500 mb-3">
                        All formats supported (Max 5 files per category, 25MB each)
                      </p>
                      <input
                        type="file"
                        multiple
                        accept="*"
                        onChange={(e) => handleCategorizedFileUpload(e.target.files, activeDocumentCategory as keyof typeof formData.projectDocuments)}
                        className="hidden"
                        id={`file-upload-${activeDocumentCategory}`}
                      />
                      <label
                        htmlFor={`file-upload-${activeDocumentCategory}`}
                        className="inline-flex items-center px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 cursor-pointer transition-colors"
                      >
                        Choose Files
                      </label>
                    </div>
                  </div>
                )}

                {/* Uploaded Files by Category */}
                {Object.entries(formData.projectDocuments).map(([category, files]) => 
                  files.length > 0 && (
                    <div key={category} className="mb-4">
                      <h6 className="text-sm font-medium text-gray-300 mb-2 capitalize flex items-center">
                        {category === 'requirements' && '📋'}
                        {category === 'designs' && '🎨'}
                        {category === 'references' && '🔗'}
                        {category === 'contracts' && '📜'}
                        {category === 'other' && '📁'}
                        <span className="ml-2">{category} ({files.length})</span>
                      </h6>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {files.map((file, index) => (
                          <div key={index} className="flex items-center justify-between bg-gray-800 rounded-lg p-3 group">
                            <div className="flex items-center space-x-3 flex-1 min-w-0">
                              <div className="text-lg flex-shrink-0">
                                {getFileIcon(file.name)}
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="text-sm text-gray-300 truncate font-medium">
                                  {file.name}
                                </div>
                                <div className="text-xs text-gray-500">
                                  {(file.size / 1024 / 1024).toFixed(2)} MB • {file.type || 'Unknown type'}
                                </div>
                                {file.lastModified && (
                                  <div className="text-xs text-gray-600">
                                    Modified: {new Date(file.lastModified).toLocaleDateString()}
                                  </div>
                                )}
                              </div>
                            </div>
                            
                            {/* File Actions */}
                            <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              {documentPreviews[`${category}_${file.name}`] && (
                                <div className="w-8 h-8 rounded overflow-hidden border border-gray-600">
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img 
                                    src={documentPreviews[`${category}_${file.name}`]} 
                                    alt="Preview" 
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              )}
                              
                              <button
                                type="button"
                                onClick={() => previewFile(file)}
                                className="p-1 text-blue-400 hover:text-blue-300 transition-colors"
                                title="Preview"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              
                              <button
                                type="button"
                                onClick={() => downloadFile(file)}
                                className="p-1 text-green-400 hover:text-green-300 transition-colors"
                                title="Download"
                              >
                                <Download className="w-4 h-4" />
                              </button>
                              
                              <button
                                type="button"
                                onClick={() => removeFileFromCategory(category as keyof typeof formData.projectDocuments, index)}
                                className="p-1 text-red-400 hover:text-red-300 transition-colors"
                                title="Remove"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                )}

                {/* Legacy General Upload (keeping for backward compatibility) */}
                <div className="border-t border-gray-700 pt-4">
                  <h5 className="text-sm font-medium text-gray-400 mb-3">Quick Upload (General)</h5>
                  <div
                    className={`border-2 border-dashed rounded-lg p-4 text-center transition-colors ${
                      dragActive
                        ? "border-cyan-500 bg-cyan-500/10"
                        : "border-gray-600 hover:border-gray-500"
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    <Upload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-300 mb-2">Drop files here for general upload</p>
                    <input
                      type="file"
                      multiple
                      accept="*"
                      onChange={(e) => handleFileUpload(e.target.files)}
                      className="hidden"
                      id="file-upload-general"
                    />
                    <label
                      htmlFor="file-upload-general"
                      className="inline-flex items-center px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-600 cursor-pointer transition-colors text-sm"
                    >
                      Choose Files
                    </label>
                  </div>

                  {/* General Uploaded Files */}
                  {formData.documents.length > 0 && (
                    <div className="mt-3">
                      <p className="text-xs text-gray-400 mb-2">General files:</p>
                      <div className="space-y-1">
                        {formData.documents.map((file, index) => (
                          <div key={index} className="flex items-center justify-between bg-gray-800 rounded p-2 text-sm">
                            <div className="flex items-center space-x-2 min-w-0 flex-1">
                              <span>{getFileIcon(file.name)}</span>
                              <span className="text-gray-300 truncate">{file.name}</span>
                              <span className="text-gray-500 text-xs">
                                ({(file.size / 1024 / 1024).toFixed(1)} MB)
                              </span>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFile(index)}
                              className="text-red-400 hover:text-red-300 text-xs ml-2"
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Upload Summary */}
                <div className="mt-4 p-3 bg-gray-900 rounded-lg">
                  <h6 className="text-sm font-medium text-white mb-2">Upload Summary</h6>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                    <div className="text-gray-300">
                      <span className="text-cyan-400">Total Files:</span> {
                        Object.values(formData.projectDocuments).reduce((acc, files) => acc + files.length, 0) + formData.documents.length
                      }
                    </div>
                    <div className="text-gray-300">
                      <span className="text-cyan-400">Total Size:</span> {
                        (
                          [...Object.values(formData.projectDocuments).flat(), ...formData.documents]
                          .reduce((acc, file) => acc + file.size, 0) / 1024 / 1024
                        ).toFixed(2)
                      } MB
                    </div>
                    <div className="text-gray-300">
                      <span className="text-cyan-400">Categories:</span> {
                        Object.entries(formData.projectDocuments).filter(([, files]) => files.length > 0).length
                      }
                    </div>
                  </div>
                </div>
              </div>

              {/* Communication Preferences */}
              <div className="border-t border-gray-800 pt-6">
                <h4 className="text-lg font-semibold text-white mb-4">Communication Preferences</h4>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Preferred Meeting Type
                    </label>
                    <select
                      name="meetingPreference"
                      value={formData.meetingPreference}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    >
                      <option value="">Select preference</option>
                      <option value="video-call">Video Call</option>
                      <option value="phone-call">Phone Call</option>
                      <option value="in-person">In Person</option>
                      <option value="email-only">Email Only</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Communication Frequency
                    </label>
                    <select
                      name="communicationPreference"
                      value={formData.communicationPreference}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    >
                      <option value="">Select frequency</option>
                      <option value="daily">Daily updates</option>
                      <option value="weekly">Weekly updates</option>
                      <option value="bi-weekly">Bi-weekly updates</option>
                      <option value="milestones">Milestone updates only</option>
                      <option value="as-needed">As needed</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Project Description *
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                  placeholder="Describe your project in detail. Include goals, target audience, specific requirements, existing systems, and any constraints or preferences..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-white py-4 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending Your Project Details...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Project Inquiry</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
